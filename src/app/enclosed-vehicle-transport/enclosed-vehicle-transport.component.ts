import { Component, OnInit } from '@angular/core';
// import { SeoService } from '../Services/seoService'
import { Title, Meta } from '@angular/platform-browser';

declare var $:any
@Component({
  selector: 'app-enclosed-vehicle-transport',
  templateUrl: './enclosed-vehicle-transport.component.html',
  styleUrls: ['./enclosed-vehicle-transport.component.scss']
})
export class EnclosedVehicleTransportComponent implements OnInit {

  constructor( private titleService: Title,
    private metaTagService: Meta
    // private seo :SeoService
    ) { }

  ngOnInit(): void {
    window.scroll(0,0)
    this.titleService.setTitle('Enclosed Vehicle Transport | Enclosed Car Transport');
    this.metaTagService.updateTag(
      { name: 'description', content: 'enclosed car transport is our specialty. Enclosed car transport requires specific handling and American Auto Transports is an instance of car transport companies.' }
    );
    this.metaTagService.updateTag(
      { name: 'keywords', content: 'enclosed vehicle transport, enclosed car transport, car transport companies' }
    );
    // this.seo.setTitle('Enclosed Vehicle Transport | Enclosed Car Transport');
    // this.seo.setDescription('enclosed car transport is our specialty. Enclosed car transport requires specific handling and American Auto Transports is an instance of car transport companies.');
    // this.seo.addMetaKeyWords('enclosed vehicle transport, enclosed car transport, car transport companies');
    

    //     // Updating Open Graph
    //     // this.seo.updateOGTitle('Enclosed Vehicle Transport | Enclosed Car Transport');
    //     // this.seo.updateOGURL(window.location.href);

    //     // setting CanonicalURL
    //     this.seo.createLinkForCanonicalURL();

        // setting twitter
        // this.seo.updateTwitterTitle('Enclosed Vehicle Transport | Enclosed Car Transport');
  }
  gerQuote(){
    window.scroll(0,0)
    setTimeout(function () {
      $('#textsearch').focus();
    }, 1500);
  }
}
