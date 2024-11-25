import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ThingAsyncComponent } from './thing-async/thing-async.component';
import { AreaAsyncComponent } from './area-async/area-async.component';

const routes: Routes = [
  { path: 'things', component: ThingAsyncComponent },
  { path: 'areas', component: AreaAsyncComponent }
];

@NgModule({
  declarations: [ThingAsyncComponent, AreaAsyncComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Module2Module { }