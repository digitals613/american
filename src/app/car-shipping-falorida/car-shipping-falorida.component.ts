import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
declare var $

@Component({
  selector: 'app-car-shipping-falorida',
  templateUrl: './car-shipping-falorida.component.html',
  styleUrls: ['./car-shipping-falorida.component.scss']
})
export class CarShippingFaloridaComponent implements OnInit {

  constructor(private titleService: Title, private metaTagService: Meta) { }

  ngOnInit(): void {
    window.scroll(0,0)
    this.titleService.setTitle('Florida Car Shipping | Car Transporter | American Auto Transports Auto Shipping');
    this.metaTagService.updateTag(
      { name: 'description', content: 'Ship a car to or from Florida with the top-rated and excellent Florida car shipping company. Calculate your instant car shipping quote online today!' }
    );
    this.metaTagService.updateTag(
      { name: 'keywords', content: 'Florida Car Shipping Car Transporter Auto Shipping Florida Car movers' }
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
  isReadMore2 = true;
  showText2() {
    this.isReadMore2 = !this.isReadMore2;
  }
  isReadMore3 = true;
  showText3() {
    this.isReadMore3 = !this.isReadMore3;
  }
  isReadMore4 = true;
  showText4() {
    this.isReadMore4 = !this.isReadMore4;
  }
  isReadMore5 = true;
  showText5() {
    this.isReadMore5 = !this.isReadMore5;
  }
  isReadMore6 = true;
  showText6() {
    this.isReadMore6 = !this.isReadMore6;
  }
}
