import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
// import { FeahterIconModule } from "src/app/core/feather-icon/feather-icon.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SwiperModule } from 'swiper/angular';
import { GoogleMapsModule } from '@angular/google-maps'

// Ng-ApexCharts
import { ProfileComponent } from './profile.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
  },
];

@NgModule({
  declarations: [ProfileComponent],
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
export class ProfileModule {
 
}
