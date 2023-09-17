import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FAQComponent } from './faq/faq.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { WhyUsComponent } from './why-us/why-us.component';
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
import { PaymentComponent } from './payment/payment.component';
import { AgreementFormComponent } from './agreement-form/agreement-form.component';
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
import { ShippingInOhioComponent } from './shipping-in-ohio/shipping-in-ohio.component';
import { ShippingInOklahomaComponent } from './shipping-in-oklahoma/shipping-in-oklahoma.component';
import { ShippingInArizonaComponent } from './shipping-in-arizona/shipping-in-arizona.component';
import { CaliforniaToTexasComponent } from './california-to-texas/california-to-texas.component';
import { KentuckyCarTransporterComponent } from './kentucky-car-transporter/kentucky-car-transporter.component';
import { MarylandCarShippingComponent } from './maryland-car-shipping/maryland-car-shipping.component';
import { CarShippinNorthCarolinaComponent } from './car-shippin-north-carolina/car-shippin-north-carolina.component';
import { MichiganCarShippingComponent } from './michigan-car-shipping/michigan-car-shipping.component';
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
import { MontanaCarShippingComponent } from './montana-car-shipping/montana-car-shipping.component';
import { UtahCarShippingComponent } from './utah-car-shipping/utah-car-shipping.component';
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
import { FaloridaToNewYorkComponent } from './falorida-to-new-york/falorida-to-new-york.component';
import { FindgoodcompanyComponent } from './Blogs/findgoodcompany/findgoodcompany.component';
import { EnclosedAutoTransportComponent } from './Blogs/enclosed-auto-transport/enclosed-auto-transport.component';
import { MostReliableAutoTransportComponent } from './Blogs/most-reliable-auto-transport/most-reliable-auto-transport.component';
import { DoorToDoorTransportationComponent } from './Blogs/door-to-door-transportation/door-to-door-transportation.component'
import { DoorToDoorComponent } from './door-to-door/door-to-door.component';
import { WaysYouCanDoComponent } from './Blogs/ways-you-can-do/ways-you-can-do.component';
import { FindDoorToDoorInCaliforniaComponent } from './Blogs/find-door-to-door-in-california/find-door-to-door-in-california.component';
import { AllservicesComponent } from './allservices/allservices.component';
import { MeantoshipacarComponent } from './Blogs/meantoshipacar/meantoshipacar.component';
import { HowLongShipCarComponent } from './Blogs/how-long-ship-car/how-long-ship-car.component';
import { TransferCarFromTexasToCaliforniaComponent } from './Blogs/transfer-car-from-texas-to-california/transfer-car-from-texas-to-california.component';
import { RefundSettlementAgreementComponent } from './refund-settlement-agreement/refund-settlement-agreement.component';  


const routes: Routes = [
  { path: 'auto-transport', component: LandingpageComponent },
  { path: 'auto-transport-solution', component: LandingpageComponent },

  {
    path: '', component: AppLayoutComponent, children: [
      { path: '', component: HomeComponent },
      { path: 'about_us', component: AboutUsComponent },
      { path: 'payment', component:PaymentComponent},
      { path: 'How-To-Ship-A-Car-Across-the-Country', component: CarBlogComponent },
      { path: 'Blogs', component: BlogsComponent },
      { path: 'thankyou', component: ThankyouComponent },
      { path: 'thank-you-auto', component: ThankyouComponent },
      { path: 'cheapest-way-to-ship-a-motorcycle', component: MotorcycleBlogComponent },
      { path: 'door-to-door-transport-services', component: DoorToDoorBlogComponent },
      { path: 'contact_us', component: ContactUsComponent },
      { path: 'faq', component: FAQComponent },
      { path: 'how-it-work', component: HowItWorksComponent },
      { path: 'why-us', component: WhyUsComponent },
      { path: 'open-vehicle-transport', component: OpenVehicleTransportComponent },
      { path: 'enclosed-autotransport', component: EnclosedVehicleTransportComponent },
      { path: 'Door-to-door-auto-transport', component: DoorToDoorAutoTransportComponent },
      { path: 'car-shipping-service', component: CarShippingServiceComponent },
      { path: 'Snowbird-auto-transport', component: SnowbirdAutoTransportComponent },
      { path: 'multiple-vehicle-quote', component: MultipleVehiclesTransportComponent },
      { path: 'vintage-and-classical-car-shipping', component: VintageAndClassicalVehicleTransportComponent },
      { path: 'vehicle-shipping', component: VehicleShippingAcrossCountryComponent },
      { path: 'car-shipping-cost', component: VehicleShippingCostComponent },
      { path: 'boat-transportation', component: BoatTransportationServiceComponent },
      { path: 'Motorcycle-Shipping', component: MotorcycleTransportationServiceComponent },
      { path: 'inoperable-car-transport', component: InoperableAutoTransportComponent },
      { path: 'cardpayment', component: PaymentComponent },
      { path: 'agreement', component: AgreementFormComponent },
      { path: 'carrier_agreement', component: CarrierAgreementComponent },
      { path: 'booking', component: BookingRequestComponent },
      { path: 'reviews', component: ReviewsComponent },
      { path: 'car-shipping-ohio', component: ShippingInOhioComponent },
      { path: 'car-shipping-oklahoma', component: ShippingInOklahomaComponent },
      { path: 'car-shipping-arizona', component: ShippingInArizonaComponent },
      { path: 'car-shipping-from-texas-to-california', component: CaliforniaToTexasComponent },
      { path: 'kentucky-car-transporter', component: KentuckyCarTransporterComponent },
      { path: 'car-shipping-maryland', component: MarylandCarShippingComponent },
      { path: 'car-shipping-north-carolina', component: CarShippinNorthCarolinaComponent },
      { path: 'michigan-car-shipping', component: MichiganCarShippingComponent },
      { path: 'car-shipping-wisconsin', component: CarShippingWisconsinComponent },
      { path: 'car-shipping-illinois', component: CarShippingIllinoisComponent },
      { path: 'how-much-does-it-cost-to-ship-a-car-from-texas-to-california', component: CostCaliforniaToTexasComponent },
      { path: 'auto-shipping-louisiana', component: ShippingInLouisianaComponent },
      { path: 'car-shipping-Pennsylvania', component: PensylvaniaAutoTransportComponent },
      { path: 'maine-car-shipping', component: MaineAutoTransportComponent },
      { path: 'Florida-car-shipping', component: CarShippingFaloridaComponent },
      { path: 'car-shipping-connecticut', component: CarShippingConnecticutComponent },
      { path: 'car-shipping-Kansas', component: CarShippingKansasComponent },
      { path: 'north-dakota-car-shipping', component: CarShippingNorthDakotaComponent },
      { path: 'montana-auto-transport', component: MontanaCarShippingComponent },
      { path: 'utah-auto-transport', component: UtahCarShippingComponent },
      { path: 'houston-car-shipping', component: HoustonCarShippingComponent },
      { path: 'auto-transport-texas', component: TexasCarShippingComponent },
      { path: 'how-to-ship-a-car-another-state', component: CarShippingAnotherStateComponent },
      { path: 'car-shipping-san-antonio', component: CarShippingSanAntonioComponent },
      { path: 'california-car-shipping', component: CarShippingCaliforniaComponent },
      { path: 'georgia-auto-transport', component: GeorgiaCarShippingComponent },
      { path: 'dallas-auto-transport', component: DallasCarShippingComponent },
      { path: 'car-shipping-aurora-co', component: CarShippingAuroraComponent },
      { path: 'car-shipping-florida-to-new-york', component: FaloridaToNewYorkComponent },
      { path: 'terms', component: TermOfUseComponent },
      { path: 'privacy', component: PrivacyPolicyComponent },
      { path: 'how-do-i-find-good-auto-transport-company', component: FindgoodcompanyComponent },
      { path: 'how-much-does-enclosed-car-transport-cost', component: EnclosedAutoTransportComponent },
      { path: 'reliable-auto-transport-company', component: MostReliableAutoTransportComponent },
      { path: 'door-to-door-car-shipping', component: DoorToDoorTransportationComponent },
      { path: 'door-to-door-vehicle-shipping', component: DoorToDoorComponent },
      { path: '5_ways_you_can_do_with_enclosed_car_transport_cost', component: WaysYouCanDoComponent },
      { path: 'find-door-to-door-vehicle-shipping-services-in-california', component: FindDoorToDoorInCaliforniaComponent },
      { path: 'allservices', component: AllservicesComponent },
      { path: 'what-does-it-mean-to-ship-a-car-enclosed', component: MeantoshipacarComponent },
      { path: 'how-long-does-it-take-up-to-ship-a-car', component: HowLongShipCarComponent },
      { path: 'how-do-i-transfer-a-car-from-texas-to-california', component: TransferCarFromTexasToCaliforniaComponent },
      { path: 'refund-settlement-agreement', component: RefundSettlementAgreementComponent }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
