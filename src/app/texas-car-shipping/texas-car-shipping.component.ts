import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
declare var $

@Component({
  selector: 'app-texas-car-shipping',
  templateUrl: './texas-car-shipping.component.html',
  styleUrls: ['./texas-car-shipping.component.scss']
})
export class TexasCarShippingComponent implements OnInit {

  constructor(private titleService: Title, private metaTagService: Meta) { }

  ngOnInit(): void {
    window.scroll(0,0)
    this.titleService.setTitle('Texas Auto Transport | Car Shipping Service | Auto Shipping ');
    this.metaTagService.updateTag(
      { name: 'description', content: 'Auto transport in Texas with American Auto Transports is simple, affordable, and protects your car from wear and tear caused by long-distance travel.' }
    );
    this.metaTagService.updateTag(
      { name: 'keywords', content: 'Auto Transport Texas Car shipping texas Auto Shippers' }
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
