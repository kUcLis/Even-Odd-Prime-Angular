import { Component, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

import {Answer} from '../answer/answer.model';
@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent {
  @Input() isClickable = false;
  @Input() gameRunning: boolean = false;
  @Input() randomNumber = 0;

  @Output() answerOdd = new EventEmitter<{answerOdd:boolean}>();


onAnswer()
{
  if(this.isClickable)
  {
    this.answerOdd.emit({answerOdd: true});
    console.log('Odd Clicked');
  }
};
}
