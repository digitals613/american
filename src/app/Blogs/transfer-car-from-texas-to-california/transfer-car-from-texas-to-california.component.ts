import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-transfer-car-from-texas-to-california',
  templateUrl: './transfer-car-from-texas-to-california.component.html',
  styleUrls: ['./transfer-car-from-texas-to-california.component.scss']
})
export class TransferCarFromTexasToCaliforniaComponent implements OnInit {

  constructor(private titleService: Title, private metaTagService: Meta) { }

  ngOnInit(): void {
    window.scroll(0,0)
    this.titleService.setTitle('Shipping a Car from Texas to California | Ship a car from TX to CA');
    this.metaTagService.updateTag(
      { name: 'description', content: "American Auto Transports provides the best auto shipping services Texas to California. We provide multiple vehicle transport facilities at the best rates" }
    );
    // this.metaTagService.updateTag(
    //   { name: 'keywords', content: 'car shipping ,door to door car shipping ,car shipping service , enclosed car transport , door to door transportation' }
    // );
  }

}
