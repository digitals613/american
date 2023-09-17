import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
declare var $

@Component({
  selector: 'app-car-shipping-wisconsin',
  templateUrl: './car-shipping-wisconsin.component.html',
  styleUrls: ['./car-shipping-wisconsin.component.scss']
})
export class CarShippingWisconsinComponent implements OnInit {

  constructor(private titleService: Title, private metaTagService: Meta) { }

  ngOnInit(): void {
    window.scroll(0,0)
    this.titleService.setTitle('Car Shipping Wisconsin | Auto transport Company | Car movers');
    this.metaTagService.updateTag(
      { name: 'description', content: 'When shipping a car to or from Wisconsin, you need to hire the best company for your car shipping Wisconsin. We offer easy, cheap, and quality car shipment.' }
    );
    this.metaTagService.updateTag(
      { name: 'keywords', content: 'Car Shipping Wisconsin Auto Transport Company Wisconsin Auto transport' }
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
