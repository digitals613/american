import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
declare var $
@Component({
  selector: 'app-door-to-door-transportation',
  templateUrl: './door-to-door-transportation.component.html',
  styleUrls: ['./door-to-door-transportation.component.scss']
})
export class DoorToDoorTransportationComponent implements OnInit {

  constructor(private titleService: Title, private metaTagService: Meta) { }

  ngOnInit(): void {
    window.scroll(0,0)
    this.titleService.setTitle('Best Door to Door Car Shipping | Door to Door Transportation | Door to Door Car Transport');
    this.metaTagService.updateTag(
      { name: 'description', content: 'American Auto Transports is one of the best Door to Door Car Shipping Company in Usa. American Auto Transports wants you to experience only high-quality Door to Door services' }
    );
    this.metaTagService.updateTag(
      { name: 'keywords', content: 'Door to Door Car Shipping Door to Door Transportation Door to Door Car Transport Enclosed Car Transport Companies' }
    );
  }

}
