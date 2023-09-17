import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-services-bread-crums',
  templateUrl: './services-bread-crums.component.html',
  styleUrls: ['./services-bread-crums.component.scss']
})
export class ServicesBreadCrumsComponent implements OnInit {
  heading: any
  constructor(private router:Router) { }

  ngOnInit(): void {
    let url = this.router.url
    if(url == '/open-vehicle-transport'){
      this.heading = 'Open Vehicle Transport'
    }
    else if (url == '/enclosed-autotransport'){
      this.heading = 'Enclosed Vehicle Transport'
    }
    else if (url == '/Door-to-door-auto-transport'){
      this.heading = 'Door To Door Auto Transport'
    }
    else if(url == '/car-shipping-service'){
      this.heading = 'Car Shipping Service'
    }
    else if (url == '/Snowbird-auto-transport'){
      this.heading = 'Snowbird Auto Transport'
    }
    else if (url == '/multiple-vehicle-quote'){
      this.heading = 'Multiple Vehicles Transport'
    }
    else if (url == '/vintage-and-classical-car-shipping'){
      this.heading = 'Vintage & Classic Vehicle Transport'
    }
    else if (url == '/vehicle-shipping'){
      this.heading = 'Vehicle Shipping Across Country'
    }
    else if (url == '/car-shipping-cost'){
      this.heading = 'Vehicle Shipping Cost'
    }
    else if (url == '/boat-transportation'){
      this.heading = 'Boat Transportation Services'
    }
    else if (url == '/Motorcycle-Shipping'){
      this.heading = 'Motorcycle Transportation Services'
    }
    else if (url == '/inoperable-car-transport'){
      this.heading = 'In-Operable Auto Transport'
    }
  }

}
