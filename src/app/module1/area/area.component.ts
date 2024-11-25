import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ExampleService, Area } from '../../example.service';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AreaComponent implements OnInit {
  areas: Area[] = [];

  constructor(private exampleService: ExampleService) {}

  ngOnInit(): void {
    this.exampleService.getAreas().subscribe(data => {
      this.areas = data;
    });
  }
}