import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
declare var $

@Component({
  selector: 'app-car-shippin-north-carolina',
  templateUrl: './car-shippin-north-carolina.component.html',
  styleUrls: ['./car-shippin-north-carolina.component.scss']
})
export class CarShippinNorthCarolinaComponent implements OnInit {

  constructor(private titleService: Title, private metaTagService: Meta) { }

  ngOnInit(): void {
    window.scroll(0,0)
    this.titleService.setTitle('Car Shipping North Carolina | Auto Transport | Auto Transport');
    this.metaTagService.updateTag(
      { name: 'description', content: 'American Auto Transports is known for its professional and quality Car Shipping North-Carolina. We are committed to safe, efficient, and affordable car shipping.' }
    );
    this.metaTagService.updateTag(
      { name: 'keywords', content: 'Car Shipping North Carolina Auto Transport Auto Transport Car movers Near Me' }
    );
  }
  gerQuote(){
    window.scroll(0,0)
    setTimeout(function () {
      $('#textsearch').focus();
    }, 1500);
  }
}
