import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { MainService } from '../Services/mainService';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from "ngx-spinner";  

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  paymentForm: FormGroup
  paymentForm1: FormGroup
  paymentForm2: FormGroup
  form : FormGroup
  form2 : FormGroup
  card_no:any
  fee:any;
  order_id:any
  cardmask :any
  cardsmask :any
  cardtype:any;
  ccv:any;
  ccv2:any;
  date:any;
  expirydate:any;
  cardnumber:any;
  cardnumber2:any;
  public Cardnumber :any;
  public Cardnumber2:any;
  cardType=''
  card_no2:any
  cvv :any
  cvv2 :any
  expirydate_date:any
  data :any
  partial : boolean=false
  aprtailAllowed:boolean=false
  cardholdername :any
  cardholdernickname:any
  expirydatee:any
  chek(val:any) {
    this.expirydatee = val.toString().slice(3, 5);
  }

  constructor(private fb:FormBuilder, private serv:MainService, private SpinnerService: NgxSpinnerService) { 
    this.cardnumber = true;
    this.cardnumber2 = false;
    this.ccv = true;
    this.ccv2 = false;
  }

  ngOnInit(): void {
    window.scroll(0,0) 
    this.paymentForm = this.fb.group({
      order_id:['',[Validators.required]],
      fee:[''],
      patrila_payment :['']
      // cardnumber: ['',Validators.required,{disbaled:true}],
      // cardnumber2: ['',Validators.required,{disbaled:true}],
   
    
    })
    this.form2 = this.fb.group({
      var_type_atm: ['', Validators.compose([Validators.required])],
      order_id:['',[Validators.required]],
      fee:[''],
    });
    this.form = this.fb.group({
      // cardnumber: [{ value: "", disabled: true }, Validators.compose([Validators.required])],
      // cardnumber2: [{ value: "", disabled: true }, Validators.compose([Validators.required])],
      // ccv: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9]*$')])],
      // ccv2: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9]*$')])],
      // expirydate: ['', Validators.compose([Validators.required, Validators.pattern('(0[1-9]|10|11|12)/[0-9]{2}$')])],

     
      cardnumber: [{ value: "", disabled: true }, Validators.compose([Validators.required])],
      cardnumber2: [{ value: "", disabled: true }, Validators.compose([Validators.required])],
      ccv: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9]*$')])],
      ccv2: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9]*$')])],
      expirydate: ['', Validators.compose([Validators.required, Validators.pattern('(0[1-9]|10|11|12)/[0-9]{2}$')])],
      city: ['', Validators.compose([Validators.required])],
      country: ['', Validators.compose([Validators.required])],
      zip: ['', Validators.compose([Validators.required, Validators.maxLength(5), Validators.minLength(5),Validators.pattern('^[0-9]*$')])],
      cardnickname: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(50), Validators.pattern('^[a-zA-Z _.]+$')])],
      nickname: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.pattern('^[a-zA-Z _.]+$')])],
    });
  }
  public isInvalid: boolean = false;
  public isInvalid2 :boolean =false
  public change(event: any): void {
    let card = this.card_no.split('-').join('').split('_').join('').length;
    if (card < 16) {
      this.isInvalid = true;
    }
    else {
      this.isInvalid = false;
    }
  }
  public change2(event: any): void {
    let card2 = this.card_no2.split('-').join('').split('_').join('').length;
    if (card2 < 15) {
      this.isInvalid2 = true;
    }
    else {
      this.isInvalid2 = false;
    }
  }
  card_option = [
    { value: 'Visa', viewValue: 'Visa Card' },
    { value: 'Mastercard', viewValue: 'Master Card' },
    { value: 'AmericanExpress', viewValue: 'American Express' },
    { value: 'Discover', viewValue: 'Discover' }

  ];
  isFieldValid(form: FormGroup, field: string) {
    return !form.get(field)?.valid && form.get(field)?.touched;
  }
  displayFieldCss(form: FormGroup, field: string) {
    return {
      'has-error': this.isFieldValid(form, field),
      'has-feedback': this.isFieldValid(form, field)
    };
  }
  ShowButton(var_type_atm:any) {
    this.cardtype = var_type_atm;
    if (var_type_atm == "AmericanExpress") {
      this.cardmask = [/[3]/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]
      this.cardnumber = false;
      this.cardnumber2 = true;
      this.ccv = false;
      this.form.controls.ccv.reset();
      this.ccv2 = true;
    }
    else if (var_type_atm == "Visa") {
      this.cardsmask = [/[4]/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
      this.cardnumber2 = false;
      this.cardnumber = true;
      this.ccv2 = false;
      this.form.controls.ccv2.reset();
      this.ccv = true;
    }
    else if (var_type_atm == "Mastercard") {
      this.cardsmask = [/[5]/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
      this.cardnumber2 = false;
      this.cardnumber = true;
      this.ccv2 = false;
      this.form.controls.ccv2.reset();
      this.ccv = true;
    } else {
      this.cardsmask = [/[6]/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
      this.cardnumber2 = false;
      this.cardnumber = true;
      this.ccv2 = false;
      this.form.controls.ccv2.reset();
      this.ccv = true;
    }
  }
  public mask = function (rawValue:any) {

    if (rawValue && rawValue.length > 0) {
      if (rawValue[0] == '0' || rawValue[5] == '1') {
        return [/[01]/, /[1-9]/, '/', /[0-9]/, /[0123456789]/];
      } else {
        return [/[01]/, /[0-2]/, '/', /[0-9]/, /[0123456789]/];
      }
    }
    return [/[01]/, /[0-9]/, '/', /[0-9]/, /[0123456789]/];

  }
  onSelectionChanged(value:any) {
    if(value!=''){
      if (value == 'AmericanExpress') {
        this.form.get('cardnumber2')?.enable();
      } else {
        this.form.get('cardnumber')?.enable();
      }
    }
  
  }
  getFee(){
    let obj ={
      order_id : this.order_id
    }
    this.serv.getPaymentFee(obj).subscribe(res=>{
      this.data = res
      this.fee = this.data.payment_fee
      this.partial = this.data.partial_allowed
      this.aprtailAllowed = this.data.partial_allowed
    },error=>{
      Swal.fire("American Auto Transports" , error.error.message, "error")
      // Swal.fire(
      //   'American Auto Transports',lhrAmerican Auto Transports786
      //   'No detail found against this order id',
      //   'error'
      // )
    })
  }
  payNow(){
    if(this.aprtailAllowed==false){
      this.SpinnerService.show();  
      let obj ={
        order_id:this.order_id,
        card_no: this.card_no.split('-').join(''),
        cvv : this.cvv,
        expiry_date : this.expirydate_date,
        owner_name : this.cardholdername
        }
        this.serv.pay(obj).subscribe(res=>{
          this.form.reset(
            this.form2.reset()
          )
          this.SpinnerService.hide();  
          Swal.fire(
            'American Auto Transports',
            'Congratulations. Your payment successfully done',
            'success'
          )
        },error=>{
          this.SpinnerService.hide();  
          Swal.fire("American Auto Transports" , error.error.message, "error")
          // if(error.status==400){
          //   Swal.fire(
          //     'American Auto Transports',
          //     'Invalid Credit Card Number',
          //     'error'
          //   )
          // }
        })
    }
    else{
      this.SpinnerService.show();  
      let obj ={
        order_id:this.order_id,
        card_no: this.card_no.split('-').join(''),
        cvv : this.cvv,
        expiry_date : this.expirydate_date,
        partial_fee:this.fee,
        owner_name : this.cardholdername
        }
        this.serv.paypartial(obj).subscribe(res=>{
          this.form.reset()
          this.form2.reset()
          this.SpinnerService.hide();  
          Swal.fire(
            'American Auto Transports',
            'Congratulations. Your payment successfully done',
            'success'
          )
        },error=>{
          this.SpinnerService.hide();  
          Swal.fire("American Auto Transports" , error.error.message, "error")
        //   if(error.status==400){
        //     Swal.fire(
        //       'American Auto Transports',
        //       'Invalid Credit Card Number',
        //       'error'
        //     )
        //   }
        })
    }
  }
}
