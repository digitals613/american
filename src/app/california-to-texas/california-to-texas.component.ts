import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
declare var $
@Component({
  selector: 'app-california-to-texas',
  templateUrl: './california-to-texas.component.html',
  styleUrls: ['./california-to-texas.component.scss']
})
export class CaliforniaToTexasComponent implements OnInit {

  constructor(private titleService: Title, private metaTagService: Meta) { }

  ngOnInit(): void {
    window.scroll(0,0)
    this.titleService.setTitle('Car Shipping from Texas to California | Auto Transport | Near Me');
    this.metaTagService.updateTag(
      { name: 'description', content: 'American Auto Transports has professionally trained drivers to carry out your car shipping from California to Texas. We provide non-stop and door-to-door car shipping.' }
    );
    this.metaTagService.updateTag(
      { name: 'keywords', content: 'Car Shipping From Texas to California Auto Transport Car transporter Car movers near me' }
    );
  }
  gerQuote(){
    window.scroll(0,0)
    setTimeout(function () {
      $('#textsearch').focus();
    }, 1500);
  }
}
