import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
declare var $

@Component({
  selector: 'app-car-shipping-kansas',
  templateUrl: './car-shipping-kansas.component.html',
  styleUrls: ['./car-shipping-kansas.component.scss']
})
export class CarShippingKansasComponent implements OnInit {

  constructor(private titleService: Title, private metaTagService: Meta) { }

  ngOnInit(): void {
    window.scroll(0,0)
    this.titleService.setTitle('Car Shipping Kansas | Auto Transport Company | Car movers');
    this.metaTagService.updateTag(
      { name: 'description', content: 'When shipping a car to or from Kansas, you need to hire the best company for your car shipping Kansas. We offer easy, cheap, and quality car shipment. ' }
    );
    this.metaTagService.updateTag(
      { name: 'keywords', content: 'Car Shipping Kansas Auto Transporter Car movers near me Vehicle shipping' }
    );
  }
  getQuote(){
    window.scroll(0,0)
    setTimeout(function () {
      $('#textsearch').focus();
    }, 1500);
  }

}
