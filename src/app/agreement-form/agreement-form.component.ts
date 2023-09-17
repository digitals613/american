import { Component, OnInit, ViewChild } from '@angular/core';
import { SignaturePad } from 'angular2-signaturepad';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { FormGroup, FormBuilder, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({

  selector: 'app-agreement-form',
  templateUrl: './agreement-form.component.html',
  styleUrls: ['./agreement-form.component.scss']
})
export class AgreementFormComponent implements OnInit {
  signatureImg: string;
  AgreementForm: FormGroup
  name: any
  public innerWidth: any;
  @ViewChild(SignaturePad) signaturePad: SignaturePad;

  private signaturePadOptions: Object = { // passed through to szimek/signature_pad constructor
    'minWidth': 2,
    'canvasWidth': 700,
    'canvasHeight': 700
  };


  constructor(private http: HttpClient, private fb: FormBuilder) { }

  ngOnInit(): void {
    window.scroll(0,0)
    this.AgreementForm = this.fb.group({
      name: ['', [Validators.required]],
      check:['',[Validators.required]]
    })
    this.innerWidth = window.innerWidth;
    
    
  }

  ngAfterViewInit() {
    this.signaturePad.set('minWidth', 2);

    this.signaturePad.clear();
    // if(this.innerWidth=='520'){
    //   this.signaturePad.set('canvasWidth' , 240);
    // }
    // else if(this.innerWidth=='375'){
    //   console.log('a')
    //   this.signaturePad.set('canvasWidth', 210);
    //   this.signaturePad.set('canvasHeight', 210);
    //   this.signaturePad.resizeCanvas(
    //     'canvasWidth', 210
    //   ){
       
    //   }
    // }
    // else{
    //   this.signaturePad.set('canvasWidth', 180);
    // }
  }

  drawComplete() {
    // will be notified of szimek/signature_pad's onEnd event
    // console.log(this.signaturePad.toDataURL());
  }

  drawStart() {
    // will be notified of szimek/signature_pad's onBegin event
    // console.log('begin drawing');
  }
  clearSignature() {
    this.signaturePad.clear();
  }

  savePad() {
    const base64Data = this.signaturePad.toDataURL();
    this.signatureImg = base64Data;
    this.submit()
  }
  submit() {
    this.http.post(environment.api + 'saveagreemnt/', {
      name: this.name,
      image: this.signatureImg
    }).subscribe(res=>{
      this.AgreementForm.reset();
      this.clearSignature()
      Swal.fire(
        'American Auto Transports',
        'Thank you your agreement has been signed.',
        'success'
      )
      // console.log(res,'res')
    })
  }



}
