import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
// import { environment } from '../../environments/environment';
import { ChatService } from './chat.service';
import { Socket } from 'ngx-socket-io';
import { DatePipe } from '@angular/common'
const io = require('socket.io-client')
import { FormGroup, FormBuilder, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';

var ws: any
declare var $:any
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  lat = +42.1477261
  lng = -71.1049768
  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(ChatComponent, {
      hasBackdrop: false,
      disableClose: false,
      // height :'500px'
    });
  }
  gerQuote(){
    window.scroll(0,0)
    setTimeout(function () {
      $('#textsearch').focus();
    }, 1500);
  }
  ngOnInit(): void {
    $(document).scroll(function () {
      var y = $(this).scrollTop();
      if (y > 800) {
        $('.footer').fadeIn();
      } else {
        $('.footer').fadeOut();
      }

    });

  }
  OpenMap = () => {
    window.open("https://maps.google.com?q=" + this.lat + "," + this.lng);
  };

}
@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'chatbot.html',
  styleUrls: ['./footer.component.scss']
})
export class ChatComponent {
  newMessage: string;
  messageList: string[] = [];
  date: any
  latest_date: any
  form: FormGroup
  name: any
  phone: any
  email: any
  email_regex = '^\\w+([\.-]?\\w+)@\\w+([\.-]?\\w+)(\.\\w{2,3})+$';
  isInvalid: any
  phoneValue: any = []
  mobile = '+1-'
  phonvalid: boolean = true
  formbtnn:boolean=false
  public phoneMask = ['+', '1', '-', /[1-9]/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  getPhone() {
    if (this.phone != undefined) {
      var phoneVal = this.phone.split('_').join('').split('-').join('').split('+').join('')
      this.phoneValue.push(phoneVal)
      if (this.phone == '') {
        this.phoneValue = []
      }
      if (this.phoneValue[0] == 1) {
        this.phoneMask = ['+', '1', '-', /[1-9]/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
      }
      else {
        this.phoneMask = ['+', /\d/, /\d/, /\d/, '-', /[1-9]/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
      }
    }

  }
  formshow(){
    this.formbtnn=!this.formbtnn
  }
  public change2(event: any): void {
    // alert('a')
    // var phn = this.model.phone.split('_').join('').split('-').join('').split('+').join('').length
    var phn = this.mobile.split('_').join('').split('-').join('').split('+').join('').length
    // alert(phn)
    if (this.phoneValue[0] == 1) {
      if (phn < 11) {
        this.isInvalid = true;
      }
      else {
        this.isInvalid = false;
        this.phonvalid = false
      }
    }
    else {
      if (phn < 13) {
        this.isInvalid = true;
      }
      else {
        this.isInvalid = false;
        this.phonvalid = false
      }
    }
  }
  // movies: Movie[] = []; 
  constructor(private dialogRef: MatDialogRef<FooterComponent>, public datepipe: DatePipe, private fb: FormBuilder,
     private chatService:ChatService,
     ) {
  }
  closeDialog() {
    this.dialogRef.close();
  }
  // private url = 'ws://apis.autotransworld.com';
  private url ='ws://207.244.228.174:5010/'
  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.pattern('^[a-zA-Z _.]+$')])],
      phone: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required, Validators.pattern(this.email_regex),
      Validators.maxLength(100)])],
    });
    this.date = new Date();
    this.latest_date = this.datepipe.transform(this.date, 'EEEE, MMM d, y');
    // var socket = io(this.url, { transports: ['websocket'] });
    // socket.on('connect', function () {
    //   console.log('connected!');
    //   socket.emit('greet', { message: 'Hello Mr.Server!' });
    // });
    this.chatService.getMessage().subscribe((message: string) => {
      console.log(message,'message')
      this.messageList.push(message);
    })

  }
}