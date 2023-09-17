import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
declare var $

@Component({
  selector: 'app-montana-car-shipping',
  templateUrl: './montana-car-shipping.component.html',
  styleUrls: ['./montana-car-shipping.component.scss']
})
export class MontanaCarShippingComponent implements OnInit {

  constructor(private titleService: Title, private metaTagService: Meta) { }

  ngOnInit(): void {
    window.scroll(0,0)
    this.titleService.setTitle('Montana Auto Transport | Car Shipping Service | American Auto Transports Auto Shipping');
    this.metaTagService.updateTag(
      { name: 'description', content: 'Get a Simple, quick & affordable Interstate Car Shipping Service. American Auto Transports Montana Auto Transport has shipped more than 10,000 cars.' }
    );
    this.metaTagService.updateTag(
      { name: 'keywords', content: 'Montana Auto Transport Car Shipping Service American Auto Transports Auto Shipping Car shipping companies near me' }
    );
  }
  getQuote(){
    window.scroll(0,0)
    setTimeout(function () {
      $('#textsearch').focus();
    }, 1500);
  }
  isReadMore = true;
  isReadMore1 = true;
  showText() {
    this.isReadMore = !this.isReadMore;
  }
  showText1() {
    this.isReadMore1 = !this.isReadMore1;
  }
}
