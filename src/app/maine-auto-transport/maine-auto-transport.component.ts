import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
declare var $

@Component({
  selector: 'app-maine-auto-transport',
  templateUrl: './maine-auto-transport.component.html',
  styleUrls: ['./maine-auto-transport.component.scss']
})
export class MaineAutoTransportComponent implements OnInit {

  constructor(private titleService: Title, private metaTagService: Meta) { }

  ngOnInit(): void {
    window.scroll(0,0)
    this.titleService.setTitle('Maine car shipping | Car Movers | Auto Transport Company');
    this.metaTagService.updateTag(
      { name: 'description', content: 'Ship a car with a top-rated Maine Car Shipping company. American Auto Transports provides efficient and cost-friendly shipping service to/from Maine.' }
    );
    this.metaTagService.updateTag(
      { name: 'keywords', content: 'Maine car shipping Car Movers Auto Transport Company Maine Car Transporter ' }
    );
  }
  getQuote(){
    window.scroll(0,0)
    setTimeout(function () {
      $('#textsearch').focus();
    }, 1500);
  }
}
