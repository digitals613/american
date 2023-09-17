import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
declare var $
@Component({
  selector: 'app-kentucky-car-transporter',
  templateUrl: './kentucky-car-transporter.component.html',
  styleUrls: ['./kentucky-car-transporter.component.scss']
})
export class KentuckyCarTransporterComponent implements OnInit {

  constructor(private titleService: Title, private metaTagService: Meta) { }

  ngOnInit(): void {
    window.scroll(0,0)
    this.titleService.setTitle('Kentucky Car Transporter | Car Shipping Company | Car movers');
    this.metaTagService.updateTag(
      { name: 'description', content: 'American Auto Transports is known for its professional and excellent Kentucky Car Transporter .We believe in safe, easy, and affordable car shipping in Kentucky' }
    );
    this.metaTagService.updateTag(
      { name: 'keywords', content: 'Kentucky Car Transporter Car Shipping Company Kentucky Auto Transporter' }
    );
  }
  gerQuote(){
    window.scroll(0,0)
    setTimeout(function () {
      $('#textsearch').focus();
    }, 1500);
  }
}
