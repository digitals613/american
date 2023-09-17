import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-meantoshipacar',
  templateUrl: './meantoshipacar.component.html',
  styleUrls: ['./meantoshipacar.component.scss']
})
export class MeantoshipacarComponent implements OnInit {

  constructor(private titleService: Title, private metaTagService: Meta) { }

  ngOnInit(): void {
    window.scroll(0,0)
    this.titleService.setTitle('Does It Mean Enclosed Car Transport | Enclosed Auto Transport Solution');
    this.metaTagService.updateTag(
      { name: 'description', content: 'With Enclosed Transport, your vehicle is shipped in a fully enclosed trailer. This offers a higher degree of security and protection for your vehicle' }
    );
  }

}
