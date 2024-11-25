import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ExampleService } from '../../example.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-area-async',
  templateUrl: './area-async.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AreaAsyncComponent {
  areas$: Observable<any>;  

  constructor(private exampleService: ExampleService) {
   
    this.areas$ = this.exampleService.getAreas();
  }
}