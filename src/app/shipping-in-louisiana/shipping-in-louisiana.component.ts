import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
declare var $
@Component({
  selector: 'app-shipping-in-louisiana',
  templateUrl: './shipping-in-louisiana.component.html',
  styleUrls: ['./shipping-in-louisiana.component.scss']
})
export class ShippingInLouisianaComponent implements OnInit {


  constructor(private titleService: Title, private metaTagService: Meta) { }

  ngOnInit(): void {
    window.scroll(0,0)
    this.titleService.setTitle('Auto Shipping Louisiana | Auto transport | Car Shipping ');
    this.metaTagService.updateTag(
      { name: 'description', content: 'American Auto Transports offers non-stop and door-to-door service for your auto shipping Louisiana. Our trained drivers carry out your shipment with utmost safety.' }
    );
    this.metaTagService.updateTag(
      { name: 'keywords', content: 'Auto Shipping Louisiana Auto transport Car Shipping Car Transport Louisiana' }
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
}
