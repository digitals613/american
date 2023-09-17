import { Component, OnInit } from '@angular/core';
declare var $

@Component({
  selector: 'app-door-to-door-blog',
  templateUrl: './door-to-door-blog.component.html',
  styleUrls: ['./door-to-door-blog.component.scss']
})
export class DoorToDoorBlogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scroll(0,0)
  }
  getQuote(){
    window.scroll(0,0)
    setTimeout(function () {
      $('#textsearch').focus();
    }, 1500);
  }
}
