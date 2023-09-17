import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
declare var $

@Component({
  selector: 'app-pensylvania-auto-transport',
  templateUrl: './pensylvania-auto-transport.component.html',
  styleUrls: ['./pensylvania-auto-transport.component.scss']
})
export class PensylvaniaAutoTransportComponent implements OnInit {

  constructor(private titleService: Title, private metaTagService: Meta) { }

  ngOnInit(): void {
    window.scroll(0,0)
    this.titleService.setTitle('Car Shipping Pennsylvania | Auto transport Company | Car movers');
    this.metaTagService.updateTag(
      { name: 'description', content: 'American Auto Transports is known for its professional and quality car shipping Pennsylvania. We are committed to safe, efficient, and affordable car shipping.' }
    );
    this.metaTagService.updateTag(
      { name: 'keywords', content: 'Car Shipping Pennsylvania Auto Transport Company Pennsylvania Auto Transport Car movers' }
    );
  }
  getQuote(){
    window.scroll(0,0)
    setTimeout(function () {
      $('#textsearch').focus();
    }, 1500);
  }
}
