import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
declare var $

@Component({
  selector: 'app-shipping-in-oklahoma',
  templateUrl: './shipping-in-oklahoma.component.html',
  styleUrls: ['./shipping-in-oklahoma.component.scss']
})
export class ShippingInOklahomaComponent implements OnInit {

  constructor(private titleService: Title, private metaTagService: Meta) { }

  ngOnInit(): void {
    window.scroll(0,0)
    this.titleService.setTitle('Car Shipping Oklahoma | Auto Transport Company | Car movers');
    this.metaTagService.updateTag(
      { name: 'description', content: 'Car shipping Oklahoma. Get your car shipped by the top-rated car shipping company, American Auto Transports. We offer professional and quality car shipping.' }
    );
    this.metaTagService.updateTag(
      { name: 'keywords', content: 'Car Shipping Oklahoma Auto Transport Company Car movers Car Transporter Oklahoma' }
    );
  }
  gerQuote(){
    window.scroll(0,0)
    setTimeout(function () {
      $('#textsearch').focus();
    }, 1500);
  }
}
