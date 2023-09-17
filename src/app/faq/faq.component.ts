import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FAQComponent implements OnInit {

  constructor() { }
  panelOpenState = false;
  ngOnInit(): void {
    window.scroll(0,0)

  }

}
