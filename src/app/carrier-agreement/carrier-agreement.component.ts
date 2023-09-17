import { Component, OnInit, ViewChild } from '@angular/core';
import { SignaturePad } from 'angular2-signaturepad';import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { FormGroup, FormBuilder, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-carrier-agreement',
  templateUrl: './carrier-agreement.component.html',
  styleUrls: ['./carrier-agreement.component.scss']
})
export class CarrierAgreementComponent implements OnInit {
  signatureImg: string;
  AgreementForm: FormGroup
  name: any
  date:any
  month:any
  day:any
  mcNo:any
  lat=+42.1477261
  lng=-71.1049768
  public innerWidth: any;
  @ViewChild(SignaturePad) signaturePad: SignaturePad;

  private signaturePadOptions: Object = { // passed through to szimek/signature_pad constructor
    'minWidth': 2,
    'canvasWidth': 700,
    'canvasHeight': 700
  };

  constructor(private fb: FormBuilder, private http:HttpClient) { }

  ngOnInit(): void {
    window.scroll(0,0)
    this.AgreementForm = this.fb.group({
      name: ['', [Validators.required]],
      check:['',[Validators.required]],
      date:['',[Validators.required]]
    })
   
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
    this.http.post(environment.api + 'savecarieeragreemnt/', {
      carrier_name: this.name,
      month:this.month,
      day:this.day,
      mc_number:this.mcNo,
      image: this.signatureImg
    }).subscribe(res=>{
      this.AgreementForm.reset();
      this.month=''
      this.day=''
      this.mcNo=''
      this.clearSignature()
      Swal.fire(
        'American Auto Transports',
        'Thank you your agreement has been signed.',
        'success'
      )
      // console.log(res,'res')
    })
  }
  OpenMap = () => {
    window.open("https://maps.google.com?q="+this.lat+","+this.lng);
  };
}
