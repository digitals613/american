import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-door-to-door',
  templateUrl: './door-to-door.component.html',
  styleUrls: ['./door-to-door.component.scss']
})
export class DoorToDoorComponent implements OnInit {

  constructor(private titleService: Title,
    private metaTagService: Meta) { }

  ngOnInit(): void {
    window.scroll(0,0)
    this.titleService.setTitle('Door to Door Vehicle Shipping | Door to Door Auto Transport');
    this.metaTagService.updateTag(
      { name: 'description', content: 'Door to door Vehicle shipping is most convenient method of auto transport. You select a specific address for your vehicle to be picked up and dropped off.' }
    );
    this.metaTagService.updateTag(
      { name: 'keywords', content: 'Door to Door Vehicle Shipping' }
    );
  }

}
