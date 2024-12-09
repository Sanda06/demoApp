import { Component, inject, OnInit } from '@angular/core';
import { Area, ExampleService, Thing } from '../../example.service';
import { AreaComponent } from '../area/area.component';

@Component({
  selector: 'app-first-module-layout',
  templateUrl: './first-module-layout.component.html',
  styleUrls: ['./first-module-layout.component.scss'],
  imports:[AreaComponent],
  standalone: true 
})
export class FirstModuleLayoutComponent implements OnInit {
  private exampleService = inject(ExampleService);
  public things:Thing[] = [];
  public areas:Area[] = [];

  ngOnInit(): void {
    this.getAreas();
  }

  public getAreas():void {
    this.exampleService.getAreas().subscribe({
     next: areas => this.areas = areas,
     error:console.error
    })
 }
}
