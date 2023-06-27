import { Component, Input, SimpleChanges, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent {
  @Input() isClickable = false;

  @Input() gameRunning: boolean = false;

  @Output() answerEven = new EventEmitter<{answerEven:boolean}>();


onAnswer()
{
  if(this.isClickable)
  {
    this.answerEven.emit({answerEven: true});
    console.log('Odd Clicked');
  }
};

}
