import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { MainService } from '../Services/mainService';
import Swal from 'sweetalert2';
import { Location } from '@angular-material-extensions/google-maps-autocomplete';
import { FormGroup, FormBuilder, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
// import { SeoService } from '../Services/seoService'
import { Title, Meta } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router'

declare var $:any

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../styles/style.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('openModal') openModal: ElementRef;
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
  lat = 40.730610;
  lng = -73.935242;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
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
  timeGet ='February 10, 2022 01:01:06'
  getTime
  dict_state = {
    "AL": "Alabama", "AK": "Alaska", "AS": "American Samoa", "AZ": "Arizona", "AR": "Arkansas", "CA": "California", "CO": "Colorado", "CT": "Connecticut", "DE": "Delaware", "DC": "District Of Columbia", "FM": "Federated States Of Micronesia", "FL": "Florida", "GA": "Georgia", "GU": "Guam", "HI": "Hawaii", "ID": "Idaho", "IL": "Illinois", "IN": "Indiana", "IA": "Iowa",
    "KS": "Kansas", "KY": "Kentucky", "LA": "Louisiana", "ME": "Maine", "MH": "Marshall Islands", "MD": "Maryland", "MA": "Massachusetts", "MI": "Michigan", "MN": "Minnesota", "MS": "Mississippi",
    "MO": "Missouri", "MT": "Montana", "NE": "Nebraska", "NV": "Nevada", "NH": "New Hampshire", "NJ": "New Jersey", "NM": "New Mexico", "NY": "New York", "NC": "North Carolina", "ND": "North Dakota", "MP": "Northern Mariana Islands", "OH": "Ohio", "OK": "Oklahoma", "OR": "Oregon", "PW": "Palau", "PA": "Pennsylvania", "PR": "Puerto Rico", "RI": "Rhode Island", "SC": "South Carolina", "SD": "South Dakota", "TN": "Tennessee", "TX": "Texas", "UT": "Utah", "VT": "Vermont", "VI": "Virgin Islands", "VA": "Virginia", "WA": "Washington", "WV": "West Virginia", "WI": "Wisconsin", "WY": "Wyoming"
  };
  constructor(private serv: MainService, private formBuilder: FormBuilder, private router:Router,
    // private seo:SeoService,
     private titleService: Title,private datePipe: DatePipe,
    private metaTagService: Meta) { }

  ngOnInit(): void {
    window.scroll(0, 0)
    this.titleService.setTitle('American Auto Transports  | Nationwide Auto Shipping Company');
    this.metaTagService.updateTag(
      { name: 'description', content: 'With over 30 years of combined experience in the auto transport industry. Carrying specializes in door-to-door, open-vehicle and enclosed vehicle' }
    );
    this.metaTagService.updateTag(
      { name: 'keywords', content: 'Auto Transport Auto Shipping Company' }
    );
    // this.seo.defaultTitle();
    // this.seo.defaultKayword();
    // this.seo.defaultDescription()

    // // Updating Open Graph

    // // setting CanonicalURL
    // this.seo.createLinkForCanonicalURL();

    // setting twitter
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
    // setTimeout(() => {
    //   this.openModal.nativeElement.click();
    // }, 300);
    let today =  new Date();
    this.getTime =  new Date(today.setDate(today.getDate() + 1));
    this.getTime = this.datePipe.transform( this.getTime,'MMMM d, y');

    
  }
  // lat: any; lng: any;
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
      pick_up_date: this.pick_up_date,
      type_of_service: this.type_of_service,
      vehicle_run: this.vehicle_run,
      make: this.make,
      model: this.moodel,
      Year: this.year
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
      Swal.fire(
        'American Auto Transports',
        'Your booking request has been received, we will contact you soon.',
        'success'
      )
      // console.log(res, 'res')
    })
  }
  gerQuote(){
    window.scroll(0,0)
    setTimeout(function () {
      $('#textsearch').focus();
    }, 1500);
  }
  booking1 = true
  booking2 = false
  booking3 = false
  book1(){
    this.booking1= false
    this.booking2 = true
  }
  book2(){
    this.booking1= false
    this.booking2 = false
    this.booking3 = true
  }
  ngOnDestroy() {
    $('#exampleModalCenter').modal('hide');
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
