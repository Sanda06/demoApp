import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ThingComponent } from './thing/thing.component';
import { AreaComponent } from './area/area.component';

const routes: Routes = [
  { path: 'things', component: ThingComponent },
  { path: 'areas', component: AreaComponent }
];

@NgModule({
  declarations: [ThingComponent, AreaComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Module1Module { }