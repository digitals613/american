import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-motorcycle-transportation-service',
  templateUrl: './motorcycle-transportation-service.component.html',
  styleUrls: ['./motorcycle-transportation-service.component.scss']
})
export class MotorcycleTransportationServiceComponent implements OnInit {

  constructor(private titleService: Title,
    private metaTagService: Meta) { }

  ngOnInit(): void {
    window.scroll(0,0)
    this.titleService.setTitle('Motorcycle Shipping | Motorcycle Transport | American Auto Transports solution');
    this.metaTagService.updateTag(
      { name: 'description', content: 'Hassle-free, Fast, Efficient, Affordable, effective, and premium motorcycle shipping are a few main features of our motorcycle transport. Get A Quote!' }
    );
    this.metaTagService.updateTag(
      { name: 'keywords', content: 'Motorcycle Shipping Motorcycle Transport motorcycle movers' }
    );
  }

}
