import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-findgoodcompany',
  templateUrl: './findgoodcompany.component.html',
  styleUrls: ['./findgoodcompany.component.scss']
})
export class FindgoodcompanyComponent implements OnInit {

  constructor(private titleService: Title, private metaTagService: Meta) { }

  ngOnInit(): void {
    window.scroll(0,0)
    this.titleService.setTitle('Do I find Good Auto Transport Company Dallas | American Auto Transports');
    this.metaTagService.updateTag(
      { name: 'description', content: 'American Auto Transports Company is here for you to ship your car effectively and efficiently. Hiring American Auto Transports is the best and easy way to transport your vehicle.' }
    );
    this.metaTagService.updateTag(
      { name: 'keywords', content: 'Auto Transport Company Auto Transport Solution' }
    );
  }
  isReadMore = true;
  showText() {
    this.isReadMore = !this.isReadMore;
  }
}
