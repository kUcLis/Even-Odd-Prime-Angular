import { Component, Input, OnChanges, SimpleChanges, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-prime',
  templateUrl: './prime.component.html',
  styleUrls: ['./prime.component.css']
})
export class PrimeComponent {
@Input() isClickable = false;
@Input() gameRunning: boolean = false;

@Output() answerPrime = new EventEmitter<{answerPrime:boolean}>();


onAnswer()
{
  if(this.isClickable)
  {
    this.answerPrime.emit({answerPrime: true});
    console.log('Odd Clicked');
  }
};
};
