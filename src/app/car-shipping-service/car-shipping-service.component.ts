import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-car-shipping-service',
  templateUrl: './car-shipping-service.component.html',
  styleUrls: ['../open-vehicle-transport/open-vehicle-transport.component.scss']
})
export class CarShippingServiceComponent implements OnInit {

  constructor(private titleService: Title,
    private metaTagService: Meta) { }

  ngOnInit(): void {
    window.scroll(0,0)
    this.titleService.setTitle('Car Shipping Services| Military Vehicle Shipping');
    this.metaTagService.updateTag(
      { name: 'description', content: 'We provide safe, fast, and affordable car shipping services all over the USA. We are offering Military vehicle shipping as well. Up to 50% off, Grab the opportunity.' }
    );
    this.metaTagService.updateTag(
      { name: 'keywords', content: 'Car shipping service military vehicle shipping car transport service' }
    );
  }

}
