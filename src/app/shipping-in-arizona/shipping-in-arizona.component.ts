import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
declare var $
@Component({
  selector: 'app-shipping-in-arizona',
  templateUrl: './shipping-in-arizona.component.html',
  styleUrls: ['./shipping-in-arizona.component.scss']
})
export class ShippingInArizonaComponent implements OnInit {

  constructor(private titleService: Title, private metaTagService: Meta) { }

  ngOnInit(): void {
    window.scroll(0,0)
    this.titleService.setTitle('Car Shipping Arizona | Auto Shipping company | Car Movers ');
    this.metaTagService.updateTag(
      { name: 'description', content: 'American Auto Transports offers the best and most affordable Car Shipping Arizona. Get an instant car shipping quote online in seconds.' }
    );
    this.metaTagService.updateTag(
      { name: 'keywords', content: 'Ship My Car Car Transporter Arizona auto shippers Car Shipping quote' }
    );
  }
  gerQuote(){
    window.scroll(0,0)
    setTimeout(function () {
      $('#textsearch').focus();
    }, 1500);
  }
}
