import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Thing } from '../../example.service';

@Component({
  selector: 'app-thing-async',
  templateUrl: './thing-async.component.html',
  styleUrls: ['./thing-async.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
})

export class ThingAsyncComponent {
  public readonly things = input<Thing[]>();

}