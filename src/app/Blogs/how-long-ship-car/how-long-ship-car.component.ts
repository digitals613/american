import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-how-long-ship-car',
  templateUrl: './how-long-ship-car.component.html',
  styleUrls: ['./how-long-ship-car.component.scss']
})
export class HowLongShipCarComponent implements OnInit {

  constructor(private titleService: Title, private metaTagService: Meta) { }

  ngOnInit(): void {
    window.scroll(0,0)
    this.titleService.setTitle('How Long Does it Take to Ship a Car | Car Shipping | Car Shipping Service');
    this.metaTagService.updateTag(
      { name: 'description', content: "How Long Does it Take to Ship a Car? Our car shipping service relieves you from the stress and tension of shipping your vehicle" }
    );
    this.metaTagService.updateTag(
      { name: 'keywords', content: 'car shipping ,door to door car shipping ,car shipping service , enclosed car transport , door to door transportation' }
    );
  }
  

}
