import { Component, OnInit,ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { SignaturePad } from 'angular2-signaturepad';import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-refund-settlement-agreement',
  templateUrl: './refund-settlement-agreement.component.html',
  styleUrls: ['./refund-settlement-agreement.component.scss']
})
export class RefundSettlementAgreementComponent implements OnInit {
  customer
  date
  amount
  day:any
  mcNo:any
  month
  name
  order_id
  check 
  AgreementForm: FormGroup
  signatureImg: String
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
      amount : ['',[Validators.required]],
      order_id :['',[Validators.required]],
      date:['',[Validators.required]]
    })
    this.check =true
    this.Check()
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
  Check(){
    this.check = this.check
    console.log(this.check,'check')
  }
  submit() {
    this.http.post(environment.api + 'saverefundagreemnt/', {
      name: this.name,
      date_of_customer:this.date,
      image: this.signatureImg,
      amount : this.amount,
      order_id : this.order_id
    }).subscribe(res=>{
      this.AgreementForm.reset();
      this.date=''
      this.clearSignature()
      Swal.fire(
        'American Auto Transports',
        'Thank you, your refund settlement agreement has been signed.',
        'success'
      )
      // console.log(res,'res')
    })
  }
}
