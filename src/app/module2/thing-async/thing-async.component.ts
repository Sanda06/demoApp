import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ExampleService } from '../../example.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-thing-async',
  templateUrl: './thing-async.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ThingAsyncComponent {
  things$: Observable<any>; 

  constructor(private exampleService: ExampleService) {
   
    this.things$ = this.exampleService.getThings();
  }
}