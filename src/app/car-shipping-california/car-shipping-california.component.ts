import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
declare var $

@Component({
  selector: 'app-car-shipping-california',
  templateUrl: './car-shipping-california.component.html',
  styleUrls: ['./car-shipping-california.component.scss']
})
export class CarShippingCaliforniaComponent implements OnInit {

  constructor(private titleService: Title, private metaTagService: Meta) { }

  ngOnInit(): void {
    window.scroll(0,0)
    this.titleService.setTitle('California Car Shipping |Auto Transport service | American Auto Transports Auto Shipping');
    this.metaTagService.updateTag(
      { name: 'description', content: 'American Auto Transports is known for its professional and quality Car Shipping San Antonio. We are committed to safe, efficient, and affordable car shipping.' }
    );
    this.metaTagService.updateTag(
      { name: 'keywords', content: 'California Car Shipping Auto Transport service Car shippers Car Shipping Companies ' }
    );
  }
  isReadMore = true;
  showText() {
    this.isReadMore = !this.isReadMore;
  }
  isReadMore1 = true;
  showText1() {
    this.isReadMore1 = !this.isReadMore1;
  }
   getQuote() {
    window.scroll(0, 0);
    setTimeout(function () {
      $('#textsearch').focus();
    }, 1500);
  }

}
