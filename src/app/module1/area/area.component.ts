import { Component, input, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Area, ExampleService, Thing } from '../../example.service';
import { ThingComponent } from '../thing/thing.component';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
  imports:[CommonModule, ThingComponent],
  standalone: true,
})
export class AreaComponent implements OnInit {
  private exampleService = inject(ExampleService);

  public readonly areas = input<Area[]>();
  public things:Thing[] = [];

  ngOnInit(): void {
    this.getThings();
  }

  public getThings():void {
    this.exampleService.getThings().subscribe({
     next: things => this.things = things,
     error:console.error
    })
 }

  getItemsForZone(areaId: number): Thing[] {
    return this.things.filter(item => item.areaId === areaId);
  }
}