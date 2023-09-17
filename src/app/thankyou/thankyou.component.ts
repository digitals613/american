import { Component, OnInit } from '@angular/core';
declare var $

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.scss']
})
export class ThankyouComponent implements OnInit {
  addScriptsToHead() {
    const head = document.getElementsByTagName('head')[0];
    const script = document.createElement('script');
    script.setAttribute('id', 'addedScript');
    script.innerHTML = "gtag('event', 'conversion', { 'send_to': 'AW-10880551107/R7IGCNfiprMDEMORoMQo' });"
    head.insertBefore(script, head.firstChild);
  }
  addScriptsToHead2() {
    const head = document.getElementsByTagName('head')[0];
    const script = document.createElement('script');
    script.setAttribute('id', 'addedScript2');
    script.innerHTML = "gtag('event', 'conversion', {'send_to': 'AW-10877128903/_ebLCN-ioLADEMehz8Io'});"
    head.insertBefore(script, head.firstChild);
  }
  constructor() { }

  ngOnInit(): void {
    window.scroll(0,0)
    this.addScriptsToHead()
    this.addScriptsToHead2()

  }
  ngOnDestroy(){
    let addedScript = document.getElementById('addedScript')
    if(addedScript != undefined) {
      $("#addedScript").remove();
    } 
    let addedScript2 = document.getElementById('addedScript2')
    if(addedScript2 != undefined) {
      $("#addedScript2").remove();
    } 
  }
}
