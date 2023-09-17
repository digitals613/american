import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
declare var $

@Component({
  selector: 'app-maryland-car-shipping',
  templateUrl: './maryland-car-shipping.component.html',
  styleUrls: ['./maryland-car-shipping.component.scss']
})
export class MarylandCarShippingComponent implements OnInit {

  constructor(private titleService: Title, private metaTagService: Meta) { }

  ngOnInit(): void {
    window.scroll(0,0)
    this.titleService.setTitle('Car Shipping Maryland | Auto transport Company | Car movers');
    this.metaTagService.updateTag(
      { name: 'description', content: 'Ship a car to or from Maryland by the top-rated car shipping Maryland service. Hurry up! and get an instant online car shipping quote for your car.' }
    );
    this.metaTagService.updateTag(
      { name: 'keywords', content: 'Car Shipping Maryland Auto Transport Company Vehicle shipping Maryland Auto transport' }
    );
  }
  isReadMore = true;
  showText() {
    this.isReadMore = !this.isReadMore;
  }
  getQuote(){
    window.scroll(0,0)
    setTimeout(function () {
      $('#textsearch').focus();
    }, 1500);
  }
}
