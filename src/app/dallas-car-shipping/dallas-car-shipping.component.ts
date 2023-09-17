import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
declare var $
@Component({
  selector: 'app-dallas-car-shipping',
  templateUrl: './dallas-car-shipping.component.html',
  styleUrls: ['./dallas-car-shipping.component.scss']
})
export class DallasCarShippingComponent implements OnInit {

  constructor(private titleService: Title, private metaTagService: Meta) { }

  ngOnInit(): void {
    window.scroll(0,0)
    this.titleService.setTitle('Dallas Auto Transport | Car Shipping service | Car movers');
    this.metaTagService.updateTag(
      { name: 'description', content: 'Dallas Auto Transport We focus on making it easy for you to ship a car to/from Dallas and know that your vehicle is in great hands with American Auto Transports Carriers.' }
    );
    this.metaTagService.updateTag(
      { name: 'keywords', content: 'Dallas Auto Transport Car shipping service Car transport Car movers' }
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
  isReadMore2 = true;
  showText2() {
    this.isReadMore2 = !this.isReadMore2;
  }
  isReadMore5 = true;
  showText5() {
    this.isReadMore5 = !this.isReadMore5;
  }
}
