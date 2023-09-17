import { Component, OnInit } from '@angular/core';
import { MainService } from '../Services/mainService';
import Swal from 'sweetalert2';
import {FormGroup, FormBuilder, FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['../styles/style.scss']
})
export class ContactUsComponent implements OnInit {
  name: any
  email: any
  phone: any
  message: any
  contactUs: FormGroup;
  lat=+42.1477261
  lng=-71.1049768
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  constructor(private serv: MainService,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    window.scroll(0,0)
    this.contactUs = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20), Validators.pattern('[a-zA-Z]+')]],
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      number : ['',[Validators.required]],
      message : ['',[Validators.required, Validators.minLength(20)]]
    });
  }

  Contact() {
    let obj = {
      name: this.name,
      email: this.email,
      phone_no: this.phone,
      message: this.message,
    }
    this.serv.contactUs(obj).subscribe(res => {
      this.contactUs.reset();
      // console.log(res,'res')
      Swal.fire(
        'American Auto Transports',
        'Thank you for contacting us, we will reply soon on your email.',
        'success'
      )
    })
  }
  OpenMap = () => {
    window.open("https://maps.google.com?q="+this.lat+","+this.lng);
  };
}
