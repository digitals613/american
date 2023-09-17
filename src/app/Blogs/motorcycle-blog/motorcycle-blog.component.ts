import { Component, OnInit } from '@angular/core';
declare var $
@Component({
  selector: 'app-motorcycle-blog',
  templateUrl: './motorcycle-blog.component.html',
  styleUrls: ['./motorcycle-blog.component.scss']
})
export class MotorcycleBlogComponent implements OnInit {

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
