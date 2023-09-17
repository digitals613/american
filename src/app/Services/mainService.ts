import { OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class MainService implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  contactUs(obj:any){
     return this.http.post(environment.api + 'contactus/' , obj)
  }
  RequestBooking(obj :any){
    return this.http.post(environment.api + 'requestbooking/', obj)
  }
  getPaymentFee(obj:any){
    return this.http.post(environment.api + 'getpaymentdetail/', obj)
  }
  pay(obj:any){
    return this.http.post(environment.api+'postpayment/',obj)
  }
  paypartial(obj:any){
    return this.http.post(environment.api+'partialpayment/',obj)
  }
  sendcode(obj:any){
    return this.http.post('https://apis.autotransworld.com/sendcode/',obj)
  }
  verifyCode(obj:any){
    return this.http.post('https://apis.autotransworld.com/entercode/',obj)
    // return this.http.post('https://apis.autotransworld.com/entercode/',obj)
  }
}