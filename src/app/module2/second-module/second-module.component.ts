import { Component, inject } from '@angular/core';
import { AreaAsyncComponent } from '../area-async/area-async.component';
import { ExampleService } from '../../example.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-second-module',
  templateUrl: './second-module.component.html',
  styleUrls: ['./second-module.component.scss'],
  imports:[CommonModule, AreaAsyncComponent],
  standalone: true 
})
export class SecondModuleComponent  {
  private exampleService = inject(ExampleService);
  public areas$ =  this.exampleService.getAreas();
}
