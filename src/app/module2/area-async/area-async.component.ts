import { Component, ChangeDetectionStrategy, input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Area, ExampleService, Thing } from '../../example.service';
import { ThingAsyncComponent } from '../thing-async/thing-async.component';

@Component({
  selector: 'app-area-async',
  templateUrl: './area-async.component.html',
  styleUrls: ['./area-async.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, ThingAsyncComponent]
})

export class AreaAsyncComponent {
  private exampleService = inject(ExampleService);

  public readonly areas = input<Area[]>();
  public things$ = this.exampleService.getThings(); 

  getItemsForZone(items: Thing[], areaId: number): Thing[] {
    return items.filter(item => item.areaId === areaId);
  }
}