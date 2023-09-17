import { Component, OnInit } from '@angular/core';
// import { SeoService } from './Services/seoService';
// import { Router } from '@angular/router'
import { Title, Meta } from '@angular/platform-browser';
declare var $:any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private titleService: Title,
    private metaTagService: Meta) { }

  ngOnInit() {
    this.metaTagService.addTags([
      { name: 'keywords', content: 'Auto Transport Auto Shipping Company' },
      { name: 'description', content: 'With over 30 years of combined experience in the auto transport industry. Carrying specializes in door-to-door, open-vehicle and enclosed vehicle' },
      { name: "robots", content: "index, follow" },
      { name: "language", content: "English" }
    ]);
    $(document).scroll(function () {
      var y = $(this).scrollTop();
      if (y > 800) {
        $('.footer').fadeIn();
      } else {
        $('.footer').fadeOut();
      }

    });

  }
  gerQuote(){
    window.scroll(0,0)
    setTimeout(function () {
      $('#textsearch').focus();
    }, 1500);
  }
}

  // ngAfterViewInit(): void {
  // }



