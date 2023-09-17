import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent,ChatComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FAQComponent } from './faq/faq.component';
import { MainService } from './Services/mainService'
import { HttpClientModule } from '@angular/common/http';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { WhyUsComponent } from './why-us/why-us.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatDialogModule} from '@angular/material/dialog';
import { FlexLayoutModule } from '@angular/flex-layout';



// Material Modules start
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';



import { OpenVehicleTransportComponent } from './open-vehicle-transport/open-vehicle-transport.component';
import { EnclosedVehicleTransportComponent } from './enclosed-vehicle-transport/enclosed-vehicle-transport.component';
import { DoorToDoorAutoTransportComponent } from './door-to-door-auto-transport/door-to-door-auto-transport.component';
import { SnowbirdAutoTransportComponent } from './snowbird-auto-transport/snowbird-auto-transport.component';
import { MultipleVehiclesTransportComponent } from './multiple-vehicles-transport/multiple-vehicles-transport.component';
import { VintageAndClassicalVehicleTransportComponent } from './vintage-and-classical-vehicle-transport/vintage-and-classical-vehicle-transport.component';
import { VehicleShippingAcrossCountryComponent } from './vehicle-shipping-across-country/vehicle-shipping-across-country.component';
import { VehicleShippingCostComponent } from './vehicle-shipping-cost/vehicle-shipping-cost.component';
import { BoatTransportationServiceComponent } from './boat-transportation-service/boat-transportation-service.component';
import { MotorcycleTransportationServiceComponent } from './motorcycle-transportation-service/motorcycle-transportation-service.component';
import { InoperableAutoTransportComponent } from './inoperable-auto-transport/inoperable-auto-transport.component';
import { ServicesBreadCrumsComponent } from './services-bread-crums/services-bread-crums.component';
import { environment } from 'src/environments/environment';

import {AgmCoreModule} from '@agm/core';
import {MatGoogleMapsAutocompleteModule} from '@angular-material-extensions/google-maps-autocomplete';
import { DatePipe } from '@angular/common';


import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { PaymentComponent } from './payment/payment.component';
import { TextMaskModule } from 'angular2-text-mask';
import { AgreementFormComponent } from './agreement-form/agreement-form.component';
import { SignaturePadModule } from 'angular2-signaturepad';
import { CarrierAgreementComponent } from './carrier-agreement/carrier-agreement.component';
import { CarShippingServiceComponent } from './car-shipping-service/car-shipping-service.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { CarBlogComponent } from './Blogs/car-blog/car-blog.component';
import { MotorcycleBlogComponent } from './Blogs/motorcycle-blog/motorcycle-blog.component';
import { DoorToDoorBlogComponent } from './Blogs/door-to-door-blog/door-to-door-blog.component';
import { BlogsComponent } from './Blogs/blogs.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { BookingRequestComponent } from './booking-request/booking-request.component';
import { ReviewsComponent } from './reviews/reviews.component';
// import {SlickModule} from 'ngx-slick';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ShippingInOhioComponent } from './shipping-in-ohio/shipping-in-ohio.component';
import { ShippingInOklahomaComponent } from './shipping-in-oklahoma/shipping-in-oklahoma.component';
import { ShippingInArizonaComponent } from './shipping-in-arizona/shipping-in-arizona.component';
import { CaliforniaToTexasComponent } from './california-to-texas/california-to-texas.component';
import { CountdownModule } from "ng2-countdown-timer";
import { MichiganCarShippingComponent } from './michigan-car-shipping/michigan-car-shipping.component';
import { KentuckyCarTransporterComponent } from './kentucky-car-transporter/kentucky-car-transporter.component';
import { MarylandCarShippingComponent } from './maryland-car-shipping/maryland-car-shipping.component';
import { CarShippinNorthCarolinaComponent } from './car-shippin-north-carolina/car-shippin-north-carolina.component';
import { CarShippingWisconsinComponent } from './car-shipping-wisconsin/car-shipping-wisconsin.component';
import { CarShippingIllinoisComponent } from './car-shipping-illinois/car-shipping-illinois.component';
import { CostCaliforniaToTexasComponent } from './cost-california-to-texas/cost-california-to-texas.component';
import { ShippingInLouisianaComponent } from './shipping-in-louisiana/shipping-in-louisiana.component';
import { PensylvaniaAutoTransportComponent } from './pensylvania-auto-transport/pensylvania-auto-transport.component';
import { MaineAutoTransportComponent } from './maine-auto-transport/maine-auto-transport.component';
import { CarShippingFaloridaComponent } from './car-shipping-falorida/car-shipping-falorida.component';
import { CarShippingConnecticutComponent } from './car-shipping-connecticut/car-shipping-connecticut.component';
import { CarShippingKansasComponent } from './car-shipping-kansas/car-shipping-kansas.component';
import { CarShippingNorthDakotaComponent } from './car-shipping-north-dakota/car-shipping-north-dakota.component';
import { UtahCarShippingComponent } from './utah-car-shipping/utah-car-shipping.component';
import { MontanaCarShippingComponent } from './montana-car-shipping/montana-car-shipping.component';
import { HoustonCarShippingComponent } from './houston-car-shipping/houston-car-shipping.component';
import { TermOfUseComponent } from './term-of-use/term-of-use.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TexasCarShippingComponent } from './texas-car-shipping/texas-car-shipping.component';
import { CarShippingAnotherStateComponent } from './car-shipping-another-state/car-shipping-another-state.component';
import { CarShippingCaliforniaComponent } from './car-shipping-california/car-shipping-california.component';
import { CarShippingSanAntonioComponent } from './car-shipping-san-antonio/car-shipping-san-antonio.component';
import { GeorgiaCarShippingComponent } from './georgia-car-shipping/georgia-car-shipping.component';
import { DallasCarShippingComponent } from './dallas-car-shipping/dallas-car-shipping.component';
import { CarShippingAuroraComponent } from './car-shipping-aurora/car-shipping-aurora.component';
import { UsMapModule } from 'angular-us-map';
import { FaloridaToNewYorkComponent } from './falorida-to-new-york/falorida-to-new-york.component';
import { FindgoodcompanyComponent } from './Blogs/findgoodcompany/findgoodcompany.component';
import { EnclosedAutoTransportComponent } from './Blogs/enclosed-auto-transport/enclosed-auto-transport.component';
import { MostReliableAutoTransportComponent } from './Blogs/most-reliable-auto-transport/most-reliable-auto-transport.component';
import {DoorToDoorTransportationComponent} from './Blogs/door-to-door-transportation/door-to-door-transportation.component';
import { ChatService } from './footer/chat.service';
import { DoorToDoorComponent } from './door-to-door/door-to-door.component'
import { WaysYouCanDoComponent } from './Blogs/ways-you-can-do/ways-you-can-do.component';
import { FindDoorToDoorInCaliforniaComponent } from './Blogs/find-door-to-door-in-california/find-door-to-door-in-california.component';
import { AllservicesComponent } from './allservices/allservices.component';
import { MeantoshipacarComponent } from './Blogs/meantoshipacar/meantoshipacar.component';
import { LandingpageAutoComponent } from './landingpage-auto/landingpage-auto.component';
import { HowLongShipCarComponent } from './Blogs/how-long-ship-car/how-long-ship-car.component';
import { TransferCarFromTexasToCaliforniaComponent } from './Blogs/transfer-car-from-texas-to-california/transfer-car-from-texas-to-california.component'
// import { SeoService } from './Services/seoService'
// import {MatDatepickerModule} from '@angular/material/datepicker';
// import { AngularSignaturePadModule } from 'angular-signature-pad';
import { NgxSpinnerModule } from "ngx-spinner";
import { RefundSettlementAgreementComponent } from './refund-settlement-agreement/refund-settlement-agreement.component';  


const config: SocketIoConfig = { url: 'http://207.244.228.174:5010/chat/testing/', options: {} };
// const config: SocketIoConfig = {
// 	url: 'ws://apis.autotransworld.com/chat/testing', 
// 	options: {
// 		transports: ['websocket']
// 	}
// }
// var socket = io('ws://localhost:3000', {transports: ['websocket']});

@NgModule({

  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactUsComponent,
    AboutUsComponent,
    FAQComponent,
    HowItWorksComponent,
    TestimonialComponent,
    WhyUsComponent,
    OpenVehicleTransportComponent,
    EnclosedVehicleTransportComponent,
    DoorToDoorAutoTransportComponent,
    SnowbirdAutoTransportComponent,
    MultipleVehiclesTransportComponent,
    VintageAndClassicalVehicleTransportComponent,
    VehicleShippingAcrossCountryComponent,
    VehicleShippingCostComponent,
    BoatTransportationServiceComponent,
    MotorcycleTransportationServiceComponent,
    InoperableAutoTransportComponent,
    ServicesBreadCrumsComponent,
    PaymentComponent,
    AgreementFormComponent,
    CarrierAgreementComponent,
    CarShippingServiceComponent,
    LandingpageComponent,
    AppLayoutComponent,
    CarBlogComponent,
    MotorcycleBlogComponent,
    DoorToDoorBlogComponent,
    BlogsComponent,
    ThankyouComponent,
    BookingRequestComponent,
    ReviewsComponent,
    ShippingInOhioComponent,
    ShippingInOklahomaComponent,
    ShippingInArizonaComponent,
    CaliforniaToTexasComponent,
    ChatComponent,
    MichiganCarShippingComponent,
    KentuckyCarTransporterComponent,
    MarylandCarShippingComponent,
    CarShippinNorthCarolinaComponent,
    CarShippingWisconsinComponent,
    CarShippingIllinoisComponent,
    CostCaliforniaToTexasComponent,
    ShippingInLouisianaComponent,
    PensylvaniaAutoTransportComponent,
    MaineAutoTransportComponent,
    CarShippingFaloridaComponent,
    CarShippingConnecticutComponent,
    CarShippingKansasComponent,
    CarShippingNorthDakotaComponent,
    UtahCarShippingComponent,
    MontanaCarShippingComponent,
    HoustonCarShippingComponent,
    TermOfUseComponent,
    PrivacyPolicyComponent,
    TexasCarShippingComponent,
    CarShippingAnotherStateComponent,
    CarShippingCaliforniaComponent,
    CarShippingSanAntonioComponent,
    GeorgiaCarShippingComponent,
    DallasCarShippingComponent,
    CarShippingAuroraComponent,
    FaloridaToNewYorkComponent,
    FindgoodcompanyComponent,
    EnclosedAutoTransportComponent,
    MostReliableAutoTransportComponent,
    DoorToDoorTransportationComponent,
    DoorToDoorComponent,
    WaysYouCanDoComponent,
    FindDoorToDoorInCaliforniaComponent,
    AllservicesComponent,
    MeantoshipacarComponent,
    LandingpageAutoComponent,
    HowLongShipCarComponent,
    TransferCarFromTexasToCaliforniaComponent,
    RefundSettlementAgreementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SlickCarouselModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    UsMapModule,
    FlexLayoutModule,
    NgxSpinnerModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBvtXUC9gCiJTPRwX-tCHsOgTiLo2H8P6Q',
      language: 'en',
      libraries: ['places'],
    }),
    // MatDatepickerModule,
    // AngularSignaturePadModule.forRoot(),
    SignaturePadModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBvtXUC9gCiJTPRwX-tCHsOgTiLo2H8P6Q',
      language: 'en',
      libraries: ['places'],
    }),
    MatGoogleMapsAutocompleteModule,

    SocketIoModule.forRoot(config),


    // material moduels
    MatInputModule, MatFormFieldModule, MatSelectModule,MatDialogModule,
    TextMaskModule,CountdownModule
  ],
  exports:[
    CountdownModule
  ],
  entryComponents:[ChatComponent],
  providers: [MainService,DatePipe, 
    ChatService
    // SeoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
