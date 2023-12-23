import {Component, EventEmitter, Input, Output} from '@angular/core';
import {PlayerComponent} from "../player/player.component";

@Component({
  selector: 'app-score',
  standalone: true,
  imports: [
    PlayerComponent
  ],
  templateUrl: './score.component.html',
  styleUrl: './score.component.css'
})
export class ScoreComponent {

  @Input()
  score = {player1: 0, player2: 0}
  @Output()
  scorePoint = new EventEmitter;

  scorePlayer(player:number){
    this.scorePoint.emit(player);
  }
}
