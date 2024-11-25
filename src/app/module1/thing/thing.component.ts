import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ExampleService, Thing } from '../../example.service';

@Component({
  selector: 'app-thing',
  templateUrl: './thing.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThingComponent implements OnInit {
  things: Thing[] = [];

  constructor(private exampleService: ExampleService) {}

  ngOnInit(): void {
    this.exampleService.getThings().subscribe(data => {
      this.things = data;
    });
  }
}