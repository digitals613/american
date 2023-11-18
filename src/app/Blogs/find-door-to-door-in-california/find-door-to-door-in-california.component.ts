import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-find-door-to-door-in-california',
  templateUrl: './find-door-to-door-in-california.component.html',
  styleUrls: ['./find-door-to-door-in-california.component.scss']
})
export class FindDoorToDoorInCaliforniaComponent implements OnInit {

  constructor(private titleService: Title, private metaTagService: Meta) { }

  ngOnInit(): void {
    window.scroll(0,0)
    this.titleService.setTitle('Find Door to Door Vehicle Shipping services California | American Auto Transports');
    this.metaTagService.updateTag(
      { name: 'description', content: ' American Auto Transports: Provide Best door to door car shipping services in california & nearby areas. Book your Vehicle Contact No: (781) 562-3477' }
    );
    // this.metaTagService.updateTag(
    //   { name: 'keywords', content: 'enclosed vehicle transport, enclosed car transport, car transport companies' }
    // );
  }

}
