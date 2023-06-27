import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.css']
})
export class GamecontrolComponent {
isGameStarted = false;
@Output() gameStart = new EventEmitter<{isGameStarted: boolean}>();

@Output() gameReset = new EventEmitter<{gameReset: boolean}>();

startGame(){
  this.isGameStarted = true;
  this.gameStart.emit({
    isGameStarted: this.isGameStarted
  });
  console.log('Button Start Clicked')
}

pauseGame(){

}

resetGame(){
  this.isGameStarted = false;
  this.gameReset.emit({
    gameReset: true
  });
  console.log('Button Reset Clicked')
}
}
