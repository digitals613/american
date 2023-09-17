import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-most-reliable-auto-transport',
  templateUrl: './most-reliable-auto-transport.component.html',
  styleUrls: ['./most-reliable-auto-transport.component.scss']
})
export class MostReliableAutoTransportComponent implements OnInit {

  constructor(private titleService: Title, private metaTagService: Meta) { }

  ngOnInit(): void {
    window.scroll(0,0)
    this.titleService.setTitle('What Is The Most Reliable Auto Transport Company');
    this.metaTagService.updateTag(
      { name: 'description', content: 'American Auto Transports solution is the most reliable auto transport company in Us.American Auto Transports provide reliable and professional car shipping services.' }
    );
    // this.metaTagService.updateTag(
    //   { name: 'keywords', content: 'Auto Transport Company Auto Transport Solution' }
    // );
  }

}
