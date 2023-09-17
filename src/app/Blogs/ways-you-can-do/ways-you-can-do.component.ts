import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-ways-you-can-do',
  templateUrl: './ways-you-can-do.component.html',
  styleUrls: ['./ways-you-can-do.component.scss']
})
export class WaysYouCanDoComponent implements OnInit {

  constructor(private titleService: Title, private metaTagService: Meta) { }

  ngOnInit(): void {
    window.scroll(0,0)
    this.titleService.setTitle('5 Ingenious Ways You Can Do With Enclosed Car Transport Cost');
    this.metaTagService.updateTag(
      { name: 'description', content: "Here's the reason why enclosed car transport is costly, how it can really be wise speculation, and why it's the best auto transport method while moving." }
    );
    // this.metaTagService.updateTag(
    //   { name: 'keywords', content: 'enclosed vehicle transport, enclosed car transport, car transport companies' }
    // );
  }

}
