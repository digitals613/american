import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
declare var $

@Component({
  selector: 'app-car-shipping-north-dakota',
  templateUrl: './car-shipping-north-dakota.component.html',
  styleUrls: ['./car-shipping-north-dakota.component.scss']
})
export class CarShippingNorthDakotaComponent implements OnInit {

  constructor(private titleService: Title, private metaTagService: Meta) { }

  ngOnInit(): void {
    window.scroll(0,0)
    this.titleService.setTitle('North Dakota Car Shipping | Car Transporter | American Auto Transports Auto Shipping');
    this.metaTagService.updateTag(
      { name: 'description', content: 'Get a Simple, quick & affordable Interstate North Dakota Car Shipping Service. American Auto Transports vehicle Transport Company have shipped more than 10,000 cars.' }
    );
    this.metaTagService.updateTag(
      { name: 'keywords', content: 'North Dakota Car Shipping Car Transporter Auto Shipping Auto transport' }
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

}
