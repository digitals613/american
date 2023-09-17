import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
declare var $

@Component({
  selector: 'app-car-shipping-connecticut',
  templateUrl: './car-shipping-connecticut.component.html',
  styleUrls: ['./car-shipping-connecticut.component.scss']
})
export class CarShippingConnecticutComponent implements OnInit {

  constructor(private titleService: Title, private metaTagService: Meta) { }

  ngOnInit(): void {
    window.scroll(0,0)
    this.titleService.setTitle('Car Shipping Connecticut | Auto Transport Company | Car mover');
    this.metaTagService.updateTag(
      { name: 'description', content: 'American Auto Transports can get your car shipping Connecticut done with quality and efficiency. We offer 100% assurance of the safety of your vehicle.' }
    );
    this.metaTagService.updateTag(
      { name: 'keywords', content: 'Car Shipping Connecticut Auto Transport Company Auto Shipping Car Transporter Connecticut' }
    );
  }
  getQuote(){
    window.scroll(0,0)
    setTimeout(function () {
      $('#textsearch').focus();
    }, 1500);
  }
}

