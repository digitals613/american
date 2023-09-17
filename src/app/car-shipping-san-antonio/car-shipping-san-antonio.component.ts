import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
declare var $

@Component({
  selector: 'app-car-shipping-san-antonio',
  templateUrl: './car-shipping-san-antonio.component.html',
  styleUrls: ['./car-shipping-san-antonio.component.scss']
})
export class CarShippingSanAntonioComponent implements OnInit {
  constructor(private titleService: Title, private metaTagService: Meta) { }

  ngOnInit(): void {
    window.scroll(0,0)
    this.titleService.setTitle('Car Shipping San Antonio | Auto Transport | Auto Shipping');
    this.metaTagService.updateTag(
      { name: 'description', content: 'American Auto Transports is known for its professional and quality Car Shipping San Antonio. We are committed to safe, efficient, and affordable car shipping.' }
    );
    this.metaTagService.updateTag(
      { name: 'keywords', content: 'Car Shipping San Antonio Auto Transport Car Shipping Companies Car Transport' }
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
