import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-blog',
  templateUrl: './car-blog.component.html',
  styleUrls: ['./car-blog.component.scss']
})
export class CarBlogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scroll(0,0)
  }

}
