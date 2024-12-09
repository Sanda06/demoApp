import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import {  Thing } from '../../example.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-thing',
  templateUrl: './thing.component.html',
  styleUrls: ['./thing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  standalone: true
})
export class ThingComponent {
  public readonly things = input<Thing[]>([]) ;

}