import { Component, Output } from '@angular/core';
import { Answer } from './answer/answer.model';
import {CorrectAnswer} from './answer/correctAnswer.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Even,Odd or Prime';
  idTimer: any = 0;
  counter = 5;
  isGameRunning = false;
  isGameReset = false;
  isClickable = false;
  startMessage = 'Rules are simply. Hit the start button and numbers starts to show. Decide if they are "Even", "Odd" or "Prime" with buttons. For every right answer "Even":"Odd" you got +1 point, for every wrong one you got -1 point. For "Prime" you got +2 points for right, but -2 for wrong answer. You got one answer per number and 2 seconds for the answer.';
  message = this.startMessage;
  randomNumber = 0;
  userScore = 0;
  maxScore = 0;
  randomNumbers: number[] = [];

  nextRandomNumber = 0;

  userAnswers: Answer[] = [];
  correctAnswers: CorrectAnswer[] = [];
  userAnswer: Answer = new Answer(0,'',false);
  correctAnswer = new CorrectAnswer(0,'',false);

  onGameStarted(gameStarted:{isGameStarted: boolean}){

    console.log('Hud Prepare');
    this.PrepareGame();
    console.log('Hud Prepare else');
   
  };

  PrepareGame(){
    this.PrepareGameHud();
    this.idTimer = setInterval( () =>{
      this.PrepareGameHud();
    }, 1000);
  };
  
  PrepareGameHud(){
    if(this.counter < 0)
    {
      clearInterval(this.idTimer);
      this.StartGame();
    }
    else
    {
    this.message = 'Game will start in ' + this.counter;
    this.counter--;
    }
  };
  
  StartGame(){
    
    this.isGameRunning = true;
    this.nextRandomNumber = Math.floor(100 * Math.random());
    this.counter = 10;
    this.message = '';
    this.PrepareNumbers();
    this.idTimer = setInterval( () =>{
      this.PrepareNumbers();
    }, 2000);
  
  };

  PrepareNumbers() {
    this.isClickable = false;
    this.counter--;
    if (this.counter < 0) {
      if (this.idTimer) {
        clearInterval(this.idTimer);
      }
      this.SummaryOfTheGame();
    }
    else
    {
    this.randomNumber = this.nextRandomNumber;
    this.randomNumbers.push(this.randomNumber);
    this.message = '' + this.randomNumber;
    while (true) {
      let numb = Math.floor(100 * Math.random());

      if (this.randomNumbers.includes(numb)) {
        continue;
      }
      else {
        this.nextRandomNumber = numb;
        break;
      }
    }
    
    this.createCorrectAnswer();

    }
  };

  createCorrectAnswer(){
    this.correctAnswer.randomNumber = this.randomNumber;
    if(this.randomNumber % 2 === 0)
    {
      this.correctAnswer.correctAnswer = 'Even';
    }
    else
    {
      this.correctAnswer.correctAnswer = 'Odd';
    }
    let check = true;
    for(let i = 2; i < this.randomNumber/2 + 1; i++)
    {
      if(this.randomNumber === 0 || this.randomNumber === 1 || this.randomNumber % i === 0 )
      {
        check = false;
        break;
      }
    }
    this.correctAnswer.isItPrime = check;
    if(check)
    {
      this.maxScore++;
    }
    this.maxScore++;
    let newCorrect = new CorrectAnswer(this.correctAnswer.randomNumber,this.correctAnswer.correctAnswer,this.correctAnswer.isItPrime);
    this.correctAnswers.push(newCorrect);
    
    this.isClickable=true;
  };

  onAnswerOdd(answerOdd:{answerOdd:boolean}){
    this.isClickable = false;
    this.userAnswer.randomNumber = this.randomNumber;
    this.userAnswer.userAnswer = 'Odd';
    if(this.correctAnswer.correctAnswer === this.userAnswer.userAnswer)
    {
      this.userAnswer.isItCorrect = true;
      this.userScore += 1;
    }
    else
    {
      this.userAnswer.isItCorrect = false;
      this.userScore -= 1;
    }
    this.userAnswers.push(new Answer(this.userAnswer.randomNumber,this.userAnswer.userAnswer, this.userAnswer.isItCorrect));
    console.log(this.userAnswer);
    console.log(this.userScore);
  };

  onAnswerEven(answerEven:{answerEven:boolean}){
    this.isClickable = false;
    this.userAnswer.randomNumber = this.randomNumber;
    this.userAnswer.userAnswer = 'Even';
    if(this.correctAnswer.correctAnswer === this.userAnswer.userAnswer)
    {
      this.userAnswer.isItCorrect = true;
      this.userScore += 1;
    }
    else
    {
      this.userAnswer.isItCorrect = false;
      this.userScore -= 1;
    }
    this.userAnswers.push(new Answer(this.userAnswer.randomNumber,this.userAnswer.userAnswer, this.userAnswer.isItCorrect));
    console.log(this.userAnswer);
    console.log(this.userScore);
  };

  onAnswerPrime(answerPrime:{answerPrime:boolean}){
    this.isClickable = false;
    this.userAnswer.randomNumber = this.randomNumber;
    this.userAnswer.userAnswer = 'Prime';
    if(this.correctAnswer.isItPrime)
    {
      this.userAnswer.isItCorrect = true;
      this.userScore += 2;
    }
    else
    {
      this.userAnswer.isItCorrect = false;
      this.userScore -= 2;
    }
    this.userAnswers.push(new Answer(this.userAnswer.randomNumber,this.userAnswer.userAnswer, this.userAnswer.isItCorrect));
    console.log(this.userAnswer);
    console.log(this.userScore);
  };

  onGameReset(gameReset:{gameReset: boolean}){
    console.log('Reset ');
    this.isGameReset = gameReset.gameReset;
    this.ResetHudAndGame();
  };

  ResetHudAndGame(){
    if(this.idTimer)
      {
        clearInterval(this.idTimer);
      }
      this.isGameRunning=false;
      this.isGameReset = false;
      this.message = this.startMessage;
      this.counter = 5;
      this.correctAnswers = [];
      this.userAnswers = [];
      this.userScore = 0;
      this.maxScore = 0;
      console.log('Reset Event in HUD!')
  };

  SummaryOfTheGame(){
      this.message = 'End - Your Score: '+ this.userScore +'. Max Score: ' + this.maxScore+'. Hit restart and start again to repeat. Enjoy!';
      console.log(this.userAnswers);
      console.log(this.correctAnswers);
  };
}
