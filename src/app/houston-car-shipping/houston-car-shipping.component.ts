import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
declare var $

@Component({
  selector: 'app-houston-car-shipping',
  templateUrl: './houston-car-shipping.component.html',
  styleUrls: ['./houston-car-shipping.component.scss']
})
export class HoustonCarShippingComponent implements OnInit {

  constructor(private titleService: Title, private metaTagService: Meta) { }

  ngOnInit(): void {
  window.scroll(0,0)
    this.titleService.setTitle('Houston Car Shipping | Auto Transport service | Car movers');
    this.metaTagService.updateTag(
      { name: 'description', content: 'Shipping Cars to and from Houston, American Auto Transports is committed to providing you top-quality Reliable & Affordable Houston Auto Transport Services car shipping to Houston.' }
    );
    this.metaTagService.updateTag(
      { name: 'keywords', content: 'Houston Car Shipping Auto Transport Service Car Shipping Companies Car Shippers' }
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
