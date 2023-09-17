import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
declare var $

@Component({
  selector: 'app-car-shipping-aurora',
  templateUrl: './car-shipping-aurora.component.html',
  styleUrls: ['./car-shipping-aurora.component.scss']
})
export class CarShippingAuroraComponent implements OnInit {

  constructor(private titleService: Title, private metaTagService: Meta) { }

  ngOnInit(): void {
    window.scroll(0,0)
    this.titleService.setTitle('Car Shipping Aurora Co | Auto Transport | Car Transport');
    this.metaTagService.updateTag(
      { name: 'description', content: 'American Auto Transports is known for its professional and quality Car Shipping Aurora Co. We are committed to safe, efficient, and affordable car shipping.' }
    );
    this.metaTagService.updateTag(
      { name: 'keywords', content: 'Car Shipping Aurora Co Auto Transport Car Transport Car Shipping Service' }
    );
  }
  isReadMore = true;
  showText() {
    this.isReadMore = !this.isReadMore;
  }
   getQuote() {
    window.scroll(0, 0);
    setTimeout(function () {
      $('#textsearch').focus();
    }, 1500);
  }
}
