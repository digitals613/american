import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
declare var $

@Component({
  selector: 'app-cost-california-to-texas',
  templateUrl: './cost-california-to-texas.component.html',
  styleUrls: ['./cost-california-to-texas.component.scss']
})
export class CostCaliforniaToTexasComponent implements OnInit {

  constructor(private titleService: Title, private metaTagService: Meta) { }

  ngOnInit(): void {
    window.scroll(0,0)
    this.titleService.setTitle('How much does it Cost to Ship a Car from Texas to California | Auto Transport');
    this.metaTagService.updateTag(
      { name: 'description', content: 'How Much Does it Cost to Ship a Car from Texas to California? Car shipping cost from Texas to California. Affordable Car Shipping Services from Texas to California.' }
    );
    // this.metaTagService.updateTag(
    //   { name: 'keywords', content: 'Florida Car Shipping Car Transporter Auto Shipping Florida Car movers' }
    // );
  }
  getQuote(){
    window.scroll(0,0)
    setTimeout(function () {
      $('#textsearch').focus();
    }, 1500);
  }
  isReadMore0 = true;
  isReadMore = true;
  isReadMore1 = true;
  isReadMore2 = true;
  isReadMore3 = true;
  isReadMore4 = true;
  isReadMore5 = true;

  showText0() {
    this.isReadMore0 = !this.isReadMore0;
  }
  showText() {
    this.isReadMore = !this.isReadMore;
  }
  showText1() {
    this.isReadMore1 = !this.isReadMore1;
  }
  showText2() {
    this.isReadMore2 = !this.isReadMore2;
  }
  showText3() {
    this.isReadMore3 = !this.isReadMore3;
  }
  showText4() {
    this.isReadMore4 = !this.isReadMore4;
  }
  showText5() {
    this.isReadMore5 = !this.isReadMore5;
  }
}
