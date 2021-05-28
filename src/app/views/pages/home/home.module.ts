import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HttpClient } from "@angular/common/http";
// import { FeahterIconModule } from "src/app/core/feather-icon/feather-icon.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
// import { NgSelectModule } from '@ng-select/ng-select';

// Ng-ApexCharts 
import { HomeComponent } from "./home.component"; 

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  
  },
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    FormsModule,
    NgbModule, 
    // NgSelectModule
  ],
  providers: [HttpClient],
})
export class HomeModule {}
