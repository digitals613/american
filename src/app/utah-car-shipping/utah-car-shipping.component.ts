import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
declare var $
@Component({
  selector: 'app-utah-car-shipping',
  templateUrl: './utah-car-shipping.component.html',
  styleUrls: ['./utah-car-shipping.component.scss']
})
export class UtahCarShippingComponent implements OnInit {

  constructor(private titleService: Title, private metaTagService: Meta) { }

  ngOnInit(): void {
    window.scroll(0,0)
    this.titleService.setTitle('Utah Auto Transport | Car Shipping Service | Auto Shipping ');
    this.metaTagService.updateTag(
      { name: 'description', content: 'American Auto Transports can get your Utah auto transport done with quality and efficiency. We offer 100% assurance of the safety of your vehicle.' }
    );
    this.metaTagService.updateTag(
      { name: 'keywords', content: 'Auto Shipping Car Shipping Service Utah Auto Transport Ship my car' }
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
