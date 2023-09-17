import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
declare var $

@Component({
  selector: 'app-falorida-to-new-york',
  templateUrl: './falorida-to-new-york.component.html',
  styleUrls: ['./falorida-to-new-york.component.scss']
})
export class FaloridaToNewYorkComponent implements OnInit {

  constructor(private titleService: Title, private metaTagService: Meta) { }

  ngOnInit(): void {
    window.scroll(0,0)
    this.titleService.setTitle('Car Shipping Florida to New York | Auto Transport | Car movers');
    this.metaTagService.updateTag(
      { name: 'description', content: 'Car Shipping from Florida to New York has never been easier. American Auto Transports is here to make it easy for you and waiting for you to schedule a delivery.' }
    );
    this.metaTagService.updateTag(
      { name: 'keywords', content: 'Car Shipping Florida to New York Auto Transport Car movers Car Shipping Service' }
    );
  }
  getQuote(){
    window.scroll(0,0)
    setTimeout(function () {
      $('#textsearch').focus();
    }, 1500);
  }
  isReadMore = true;
  showText() {
    this.isReadMore = !this.isReadMore;
  }
  isReadMore2 = true;
  showText2() {
    this.isReadMore2 = !this.isReadMore2;
  }
}
