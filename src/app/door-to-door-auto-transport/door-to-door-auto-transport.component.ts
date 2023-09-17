import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router'

@Component({
  selector: 'app-door-to-door-auto-transport',
  templateUrl: './door-to-door-auto-transport.component.html',
  styleUrls: ['../open-vehicle-transport/open-vehicle-transport.component.scss']
})
export class DoorToDoorAutoTransportComponent implements OnInit {

  constructor(private titleService: Title, private router:Router,
    private metaTagService: Meta) { }

  ngOnInit(): void {
    window.scroll(0,0)
    this.titleService.setTitle('Door To Door Auto Transport| Car Shipping Door to Door  service');
    this.metaTagService.updateTag(
      { name: 'description', content: 'Get Simple, quick & affordable Interstate Door to Door auto transport service.  American Auto Transports vehicle transport company have shipped more than 10,000 cars.' }
    );
    this.metaTagService.updateTag(
      { name: 'keywords', content: 'car shipping door to door Car Shipping Door to Door car transport Door to Door' }
    );
  }
  getQuote(){
    this.router.navigate([''])
  }

}
