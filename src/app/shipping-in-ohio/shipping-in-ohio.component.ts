import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
declare var $
@Component({
  selector: 'app-shipping-in-ohio',
  templateUrl: './shipping-in-ohio.component.html',
  styleUrls: ['./shipping-in-ohio.component.scss']
})
export class ShippingInOhioComponent implements OnInit {

  constructor(private titleService: Title, private metaTagService: Meta) { }

  ngOnInit(): void {
    window.scroll(0,0)
    this.titleService.setTitle('Car Shipping Ohio | Auto Transport | Car transporter | Near Me');
    this.metaTagService.updateTag(
      { name: 'description', content: 'Car shipping Ohio. Get your car shipped to/from Ohio by American Auto Transports. To ship your car, get an online instant car shipping quote today.' }
    );
    this.metaTagService.updateTag(
      { name: 'keywords', content: 'Car Shipping Ohio Ohio Auto Transport Car transporter Car Mover' }
    );
  }
  gerQuote(){
    window.scroll(0,0)
    setTimeout(function () {
      $('#textsearch').focus();
    }, 1500);
  }
}
