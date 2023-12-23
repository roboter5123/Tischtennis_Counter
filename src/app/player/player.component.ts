import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [],
  templateUrl: './player.component.html',
  styleUrl: './player.component.css'
})
export class PlayerComponent {

  @Input()
  points: number;

  @Output()
  scorePoint = new EventEmitter;

  constructor() {
    this.points = 0;
  }

  addPoints() {
    this.scorePoint.emit();
  }
}
