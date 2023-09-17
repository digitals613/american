import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-snowbird-auto-transport',
  templateUrl: './snowbird-auto-transport.component.html',
  styleUrls: ['./snowbird-auto-transport.component.scss']
})
export class SnowbirdAutoTransportComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scroll(0,0)
  }

}
