import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
declare var $

@Component({
  selector: 'app-car-shipping-another-state',
  templateUrl: './car-shipping-another-state.component.html',
  styleUrls: ['./car-shipping-another-state.component.scss']
})
export class CarShippingAnotherStateComponent implements OnInit {

  constructor(private titleService: Title, private metaTagService: Meta) { }

  ngOnInit(): void {
    window.scroll(0,0)
    this.titleService.setTitle('How to Ship a Car to another State | Car Transporter | American Auto Transports Auto Shipping');
    this.metaTagService.updateTag(
      { name: 'description', content: 'How to Ship a Car to another State, Get a Simple, quick & affordable Interstate Car Shipping Service. American Auto Transports vehicle Transport Company have shipped more than 10,000 cars' }
    );
    this.metaTagService.updateTag(
      { name: 'keywords', content: 'How to Ship a Car to another State Car Transporter Car Shipping Service Auto Transport' }
    );
  }
  getQuote(){
    window.scroll(0,0)
    setTimeout(function () {
      $('#textsearch').focus();
    }, 1500);
  }
  isReadMore = true;
  showText() {
    this.isReadMore = !this.isReadMore;
  }
  isReadMore1 = true;
  showText1() {
    this.isReadMore1 = !this.isReadMore1;
  }
  isReadMore0 = true;
  showText0() {
    this.isReadMore0 = !this.isReadMore0;
  }
}
