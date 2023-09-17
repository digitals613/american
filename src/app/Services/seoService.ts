// import { Injectable, Inject } from '@angular/core';
// import { DOCUMENT } from '@angular/common';
// import { Title, Meta } from '@angular/platform-browser';

// @Injectable({
//    providedIn: 'root'
// })

// export class SeoService {
//    constructor(@Inject(DOCUMENT) private doc:any, private titleService: Title, private meta: Meta) { }

//    // ------------ Set Page Title ------------
//    defaultTitle() {
//       this.titleService.setTitle('American Auto Transports  | Nationwide Auto Shipping Company');
//    }

//    setTitle(name:any) {
//       this.titleService.setTitle(name);
//    }

//    // ------------ CanonicalURL ------------

//    createLinkForCanonicalURL() {
//       let link: HTMLLinkElement = this.doc.createElement('link');
//       link.setAttribute('rel', 'canonical');
//       this.doc.head.appendChild(link)
// ;
//       link.setAttribute('href', this.doc.URL);
//    }
//    // ------------- Meta ------------------
//    //  open graph
//    // defaultOGTitle() {
//    //    this.meta.updateTag({ property: 'og:title', content: 'RFP Gurus | Find RFP Bid Sites | Government Request for Proposal' });
//    // }

//    // updateOGTitle(title:any) {
//    //    this.meta.updateTag({ property: 'og:title', content: title + ' | RFP Gurus | Find RFP Bid Sites | Government Request for Proposal' });
//    // }

//    // updateOGURL(url:any) {
//    //    this.meta.updateTag({ property: 'og:url', content: url });
//    // }

//    //  Twitter
//    // defaultTwitterTitle() {
//    //    this.meta.updateTag({ name: 'twitter:title', content: "RFP Gurus | Find RFP Bid Sites | Government Request for Proposal" });
//    // }

//    // updateTwitterTitle(name:any) {
//    //    this.meta.updateTag({ name: 'twitter:title', content: name + " | RFP Gurus | Find RFP Bid Sites | Government Request for Proposal" });
//    // }
//    defaultKayword(){
//       this.meta.addTag({ name: 'keywords', content: 'Auto Transport Auto Shipping Company' });
//    }
//    addMetaKeyWords(keyword:any) {
//       this.meta.addTag({ name: 'keywords', content: keyword });
//    }
//    defaultDescription(){
//       this.meta.addTag({ name: 'description', content: 'With over 30 years of combined experience in the auto transport industry. Carrying specializes in door-to-door, open-vehicle and enclosed vehicle' })
//    }
//    setDescription(description:any){
//       this.meta.addTag({ name: 'description', content: description })
//    }

// } 