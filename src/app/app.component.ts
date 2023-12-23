import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {ScoreComponent} from "./score/score.component";
import {PlayerComponent} from "./player/player.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ScoreComponent, PlayerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  score = {player1: 0, player2 : 0}
  currentGame = {player1: 0, player2: 0}

  scorePoint(player: number) {
    if (player == 1){
      this.score.player1 += 1;
    }else if (player == 2){
      this.score.player2 += 1;
    }
    this.currentGame = {player1: 0, player2: 0}
  }

  scoreCurrentGame(player: number) {
    if (player == 1){
      this.currentGame.player1 += 1;
    }else if (player == 2){
      this.currentGame.player2 += 1;
    }
  }
}
