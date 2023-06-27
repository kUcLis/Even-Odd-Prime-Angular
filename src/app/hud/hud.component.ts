import { Component, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

import {Answer} from '../answer/answer.model';

@Component({
  selector: 'app-hud',
  templateUrl: './hud.component.html',
  styleUrls: ['./hud.component.css']
})
export class HudComponent {

@Input() message = '';
@Input() isGameRunning = false;
  

}
