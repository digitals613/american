import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-enclosed-auto-transport',
  templateUrl: './enclosed-auto-transport.component.html',
  styleUrls: ['./enclosed-auto-transport.component.scss']
})
export class EnclosedAutoTransportComponent implements OnInit {

  constructor(private titleService: Title, private metaTagService: Meta) { }

  ngOnInit(): void {
    window.scroll(0,0)
    this.titleService.setTitle('Enclosed Car Transport Cost & Covered Car Transport | American Auto Transports');
    this.metaTagService.updateTag(
      { name: 'description', content: 'Enclosed Auto Transport with QTS  provides you with safe, secure, and speedy door-to-door service for the pick-up, shipping, and delivery of your vehicle.' }
    );
    // this.metaTagService.updateTag(
    //   { name: 'keywords', content: 'Auto Transport Company Auto Transport Solution' }
    // );
  }

}
