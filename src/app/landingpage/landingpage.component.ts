import { Component, OnInit } from '@angular/core';
import { MainService } from '../Services/mainService';
import Swal from 'sweetalert2';
import { Location } from '@angular-material-extensions/google-maps-autocomplete';
import { FormGroup, FormBuilder, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import * as moment from 'moment';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']
})
export class LandingpageComponent implements OnInit {

  name: any
  email: any;
  phone: any;
  pick_up: any;
  drop_off: any;
  pick_up_date: any;
  type_of_service: any;
  vehicle_run: boolean
  make: any
  moodel: any
  year: any
  requestBookingForm: FormGroup;
  requestBookingForm1: FormGroup;
  requestBookingForm2: FormGroup;
  requestBookingForm3: FormGroup;
  verifyForm : FormGroup
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  public phoneMask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  text: any = {
    Year: 'Year',
    Month: 'Month',
    Weeks: "Weeks",
    Days: "Days",
    Hours: "Hrs",
    Minutes: "Mins",
    Seconds: "Secs",
    MilliSeconds: "MilliSeconds"
  };
  getTime
  href
  singleForm:boolean =false
  code
  verifyNumber: any
  verifyToKen :boolean = false
  constructor(private serv: MainService, private formBuilder: FormBuilder, private router: Router, private datePipe: DatePipe,) { }

  ngOnInit(): void {
    window.scroll(0, 0)
    this.href = this.router.url
    if(this.href=='/auto-transport'){
      this.singleForm=false
    }
    else if(this.href=='/auto-transport-solution'){
      this.singleForm=true
    }
    // this.seo.defaultTitle();
    // this.seo.defaultKayword();
    // this.seo.defaultDescription()

    // // Updating Open Graph

    // // setting CanonicalURL
    // this.seo.createLinkForCanonicalURL();

    // setting twitter
    let today = new Date();
    this.getTime = new Date(today.setDate(today.getDate() + 1));
    this.getTime = this.datePipe.transform(this.getTime, 'MMMM d, y');



    this.requestBookingForm1 = this.formBuilder.group({
      pick_up: ['', [Validators.required]],
      drop_off: ['', [Validators.required]],
      service: ['', [Validators.required]],
    });
    this.requestBookingForm2 = this.formBuilder.group({
      run: ['', [Validators.required]],
      make: ['', [Validators.required]],
      model: ['', [Validators.required]],
      year: ['', [Validators.required]]
    });
    this.requestBookingForm3 = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      number: ['', [Validators.required]],
      pick_up_date: ['', [Validators.required]],

    });
    this.verifyForm =this.formBuilder.group({
      verifying :['',[Validators.required]]
    })
    this.requestBookingForm = this.formBuilder.group({
      pick_up: ['', [Validators.required]],
      drop_off: ['', [Validators.required]],
      service: ['', [Validators.required]],
      run: ['', [Validators.required]],
      make: ['', [Validators.required]],
      model: ['', [Validators.required]],
      year: ['', [Validators.required]],
      name: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      number: ['', [Validators.required]],
      pick_up_date: ['', [Validators.required]],
    })

  }

  sendCode(){
    this.phone = this.phone.split('(').join('').split(')').join('').split(' ').join('').split('-').join('')
    let phone = '+1'+ this.phone
    let obj = {
      phone: phone
    }
    this.serv.sendcode(obj).subscribe(res=>{
      this.code = res
      this.verifyToKen = true
    })
  }
  back(){
    this.verifyToKen=false
  }
  verifyCode(){
    this.phone = this.phone.split('(').join('').split(')').join('').split(' ').join('').split('-').join('')
    let phone = '+1'+ this.phone
    let obj = {
      phone: phone,
      token: this.verifyNumber,
      // code :this.verifyForm.controls.verifying.value
    }
    this.serv.verifyCode(obj).subscribe((res: Response)=>{
      // if (res.status == 200) {
        this.requestBooking()
    // }
    },
    error=>{
      if(error.status==400){
        Swal.fire(
          'American Auto Transports',
          'Please enter a Valid verification code',
          'error'
        )
      }
    })
  }
  lat: any; lng: any;
  model: any = {};
  searchValue: any;
  location: any
  onAutocompleteSelected(result: any) {
    this.searchValue = result['formatted_address'];
    this.model.search = this.searchValue;

    // console.log(this.pick_up,'pickup')
  }

  onLocationSelected(location: Location) {
    this.lat = location.latitude;
    this.lng = location.longitude;
    // console.log(this.pick_up,'pickups')
  }

  typeService(event: any) {
    this.type_of_service = event.target.value
  }
  vehicleRun(event: any) {
    if (event.target.value = "Yes") {
      this.vehicle_run = true
    }
    else {
      this.vehicle_run = false
    }
  }

  requestBooking() {
    let obj = {
      name: this.name,
      email: this.email,
      phone: this.phone,
      pick_up: this.pick_up,
      drop_off: this.drop_off,
      pick_up_date: moment(this.pick_up_date).format('YYYY-MM-DD'),
      type_of_service: this.type_of_service,
      vehicle_run: this.vehicle_run,
      make: this.make,
      model: this.moodel,
      year: this.year
    }
    this.serv.RequestBooking(obj).subscribe(res => {
      this.booking1 = true
      this.booking2 = false
      this.booking3 = false
      this.requestBookingForm1.reset();
      this.requestBookingForm2.reset();
      this.requestBookingForm3.reset();
      this.requestBookingForm.reset();
      this.pick_up = ''
      this.drop_off = ''
      if (this.href == '/auto-transport') {
        this.router.navigate(['/thankyou'])
      }
      else if (this.href == '/auto-transport-solution') {
        this.router.navigate(['/thank-you-auto'])

      }

      // Swal.fire(
      //   'American Auto Transports',
      //   'Your booking request has been received, we will contact you soon.',
      //   'success'
      // )
      // console.log(res, 'res')
    })
  }
  gerQuote() {
    window.scroll(0, 0)
  }
  booking1 = true
  booking2 = false
  booking3 = false
  book1() {
    this.booking1 = false
    this.booking2 = true
  }
  book2() {
    this.booking1 = false
    this.booking2 = false
    this.booking3 = true
  }

  getQuote() {
    window.scroll(0, 0)
  }


}
