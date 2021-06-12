import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CheckoutComponent } from './checkout.component'; 
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SwiperModule } from 'swiper/angular';
import { GoogleMapsModule } from '@angular/google-maps';
import { ShippingComponent } from './shipping/shipping.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {
    path: '',
    component: CheckoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'shipping',
        pathMatch: 'full'
      },
      {
        path: 'shipping',
        component: ShippingComponent
      },
      {
        path: 'payment',
        component: PaymentComponent
      }
    ]
  },
]


@NgModule({
  declarations: [CheckoutComponent,ShippingComponent,PaymentComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    FormsModule,
    NgbModule,
    SwiperModule,
    GoogleMapsModule
  ],
  providers: [HttpClient],
})
export class CheckoutModule {
 
}
