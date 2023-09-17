import { Component, OnInit } from '@angular/core';
import { MainService } from '../Services/mainService';
import Swal from 'sweetalert2';
import { Location } from '@angular-material-extensions/google-maps-autocomplete';
import { FormGroup, FormBuilder, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import {ActivatedRoute,Router} from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-booking-request',
  templateUrl: './booking-request.component.html',
  styleUrls: ['../styles/style.scss']
})
export class BookingRequestComponent implements OnInit {
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
  requestBookingForm1: FormGroup;
  requestBookingForm2: FormGroup;
  requestBookingForm3: FormGroup;
  verifyForm: FormGroup
  booking1 = true
  booking2 = false
  booking3 = false
  lat = 40.730610;
  lng = -73.935242;
  dict_state = {
    "AL": "Alabama", "AK": "Alaska", "AS": "American Samoa", "AZ": "Arizona", "AR": "Arkansas", "CA": "California", "CO": "Colorado", "CT": "Connecticut", "DE": "Delaware", "DC": "District Of Columbia", "FM": "Federated States Of Micronesia", "FL": "Florida", "GA": "Georgia", "GU": "Guam", "HI": "Hawaii", "ID": "Idaho", "IL": "Illinois", "IN": "Indiana", "IA": "Iowa",
    "KS": "Kansas", "KY": "Kentucky", "LA": "Louisiana", "ME": "Maine", "MH": "Marshall Islands", "MD": "Maryland", "MA": "Massachusetts", "MI": "Michigan", "MN": "Minnesota", "MS": "Mississippi",
    "MO": "Missouri", "MT": "Montana", "NE": "Nebraska", "NV": "Nevada", "NH": "New Hampshire", "NJ": "New Jersey", "NM": "New Mexico", "NY": "New York", "NC": "North Carolina", "ND": "North Dakota", "MP": "Northern Mariana Islands", "OH": "Ohio", "OK": "Oklahoma", "OR": "Oregon", "PW": "Palau", "PA": "Pennsylvania", "PR": "Puerto Rico", "RI": "Rhode Island", "SC": "South Carolina", "SD": "South Dakota", "TN": "Tennessee", "TX": "Texas", "UT": "Utah", "VT": "Vermont", "VI": "Virgin Islands", "VA": "Virginia", "WA": "Washington", "WV": "West Virginia", "WI": "Wisconsin", "WY": "Wyoming"
  };
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  public phoneMask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ',  /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  services =[
    {value : 'Open'},
    {Value : 'Enclosed'}
  ]
  TOS:any
  code
  verifyNumber: any
  verifyToKen :boolean = false
  constructor(private serv: MainService, private formBuilder: FormBuilder,private route: ActivatedRoute,private router:Router) { }
   currentpage:any;
  ngOnInit(): void {
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
    this.currentpage=window.location.pathname
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
    this.type_of_service = event.value
  }
  service
  vehicleRun(event: any) {
    if (event.value == "Yes") {
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
      this.pick_up = ''
      this.drop_off = ''
      this.router.navigate(['/thankyou'])
      // Swal.fire(
      //   'American Auto Transports',
      //   'Your booking request has been received, we will contact you soon.',
      //   'success'
      // )
      // console.log(res, 'res')
    })
  }

  book1(){
    this.booking1= false
    this.booking2 = true
  }
  book2(){
    this.booking1= false
    this.booking2 = false
    this.booking3 = true
  }
  states: any;
  stateName: any
  getStates(e) {
    this.states = e['state-abbr'];
    this.stateName = this.dict_state[this.states];
    if(this.stateName=='Arizona'){
      this.router.navigate(['/car-shipping-arizona'])
    }
    else if(this.stateName=='California'){
      this.router.navigate(['/california-car-shipping'])
    }
    else if(this.stateName=='Connecticut'){
      this.router.navigate(['/car-shipping-connecticut'])
    }
    else if(this.stateName=='Florida'){
      this.router.navigate(['/Florida-car-shipping'])
    }
    else if(this.stateName=='Georgia'){
      this.router.navigate(['/georgia-auto-transport'])
    }
    else if(this.stateName=='Illinois'){
      this.router.navigate(['/car-shipping-illinois'])
    }
    else if(this.stateName=='Kansas'){
      this.router.navigate(['/car-shipping-Kansas'])
    }
    else if(this.stateName=='Kentucky'){
      this.router.navigate(['/kentucky-car-transporter'])
    }
    else if(this.stateName=='Louisiana'){
      this.router.navigate(['/auto-shipping-louisiana'])
    }
    else if(this.stateName=='Maine'){
      this.router.navigate(['/maine-car-shipping'])
    }
    else if(this.stateName=='Maryland'){
      this.router.navigate(['/car-shipping-maryland'])
    }
    else if(this.stateName=='Michigan'){
      this.router.navigate(['/michigan-car-shipping'])
    }
    else if(this.stateName=='Montana'){
      this.router.navigate(['/montana-auto-transport'])
    }
    else if(this.stateName=='North Carolina'){
      this.router.navigate(['/car-shipping-north-carolina'])
    }
    else if(this.stateName=='North Dakota'){
      this.router.navigate(['/north-dakota-car-shipping'])
    }
    else if(this.stateName=='Ohio'){
      this.router.navigate(['/car-shipping-ohio'])
    }
    else if(this.stateName=='Oklahoma'){
      this.router.navigate(['/car-shipping-oklahoma'])
    }
    else if(this.stateName=='Pennsylvania'){
      this.router.navigate(['/car-shipping-Pennsylvania'])
    }
    else if(this.stateName=='Texas'){
      this.router.navigate(['/auto-transport-texas'])
    }
    else if(this.stateName=='Utah'){
      this.router.navigate(['/utah-auto-transport'])
    }
    else if(this.stateName=='Wisconsin'){
      this.router.navigate(['/car-shipping-wisconsin'])
    }
    
  }
}
