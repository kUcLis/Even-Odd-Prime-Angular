import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';

import {Answer} from '../answer/answer.model';
import { CorrectAnswer } from './correctAnswer.model';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent {
//@Input('userAnswer') 

@Input() gameRunning: boolean = false;
@Input() getRandomNumber: number = 0;

@Input() userAnswer: Answer = new Answer(0,'',false);

}
