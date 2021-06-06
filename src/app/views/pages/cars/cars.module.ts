import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CarsComponent } from './cars.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {
    path: '',
    component: CarsComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: ListComponent
      },
      {
        path: 'details',
        component: DetailsComponent
      }
    ]
  },
]

@NgModule({
  declarations: [DetailsComponent, ListComponent, CarsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CarsModule { }
