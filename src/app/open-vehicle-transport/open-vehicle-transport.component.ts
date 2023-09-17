import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import {Router} from '@angular/router'

@Component({
  selector: 'app-open-vehicle-transport',
  templateUrl: './open-vehicle-transport.component.html',
  styleUrls: ['./open-vehicle-transport.component.scss']
})
export class OpenVehicleTransportComponent implements OnInit {

  constructor( private titleService: Title,
    private metaTagService: Meta, private router:Router) { }

  ngOnInit(): void {
    window.scroll(0,0)
    this.titleService.setTitle('Open Vehicle Transport |open car transport| American Auto Transports solution');
    this.metaTagService.updateTag(
      { name: 'description', content: 'open auto transport provides one of the quickest and economical open car shipping service. We make transporting your car long distance easy and hassle free. ' }
    );
    this.metaTagService.updateTag(
      { name: 'keywords', content: 'open auto transportopen vehicle transportopen car shipping' }
    );
  }
  getQuote(){
    // window.scroll(0,0)
    this.router.navigate([''])
  }
}
