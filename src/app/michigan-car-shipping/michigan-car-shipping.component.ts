import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
declare var $
@Component({
  selector: 'app-michigan-car-shipping',
  templateUrl: './michigan-car-shipping.component.html',
  styleUrls: ['./michigan-car-shipping.component.scss']
})
export class MichiganCarShippingComponent implements OnInit {

  constructor(private titleService: Title, private metaTagService: Meta) { }

  ngOnInit(): void {
    window.scroll(0,0)
    this.titleService.setTitle('Michigan Car Shipping | Auto Transport | Car transporter |ship a car');
    this.metaTagService.updateTag(
      { name: 'description', content: 'American Auto Transports is known for its professional and excellent Michigan car shipping. We believe in safe, easy, and affordable car shipping in Michigan.' }
    );
    this.metaTagService.updateTag(
      { name: 'keywords', content: 'Michigan Car Shipping Auto Transport Car transporter Car Movers Near Me' }
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
