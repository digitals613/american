import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-inoperable-auto-transport',
  templateUrl: './inoperable-auto-transport.component.html',
  styleUrls: ['./inoperable-auto-transport.component.scss']
})
export class InoperableAutoTransportComponent implements OnInit {

  constructor(private titleService: Title,
    private metaTagService: Meta) { }

  ngOnInit(): void {
    window.scroll(0,0)
    this.titleService.setTitle('inoperable vehicles | nonoperational | American Auto Transports inoperable transport');
    this.metaTagService.updateTag(
      { name: 'description', content: 'Shipping a non-operational vehicle? - Reduce Costs, Get the Best Price Rate Reliable Auto Transport for Inoperable Vehicles' }
    );
    this.metaTagService.updateTag(
      { name: 'keywords', content: 'noperable vehicles | nonoperational | American Auto Transports inoperable transport' }
    );
  }

}
