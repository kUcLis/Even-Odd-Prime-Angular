import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ScoreComponent } from './score/score.component';
import { PrimeComponent } from './prime/prime.component';
import { EvenComponent } from './even/even.component';
import { OddComponent } from './odd/odd.component';
import { GamecontrolComponent } from './gamecontrol/gamecontrol.component';
import { HudComponent } from './hud/hud.component';
import { AnswerComponent } from './answer/answer.component';

@NgModule({
  declarations: [
    AppComponent,
    ScoreComponent,
    PrimeComponent,
    EvenComponent,
    OddComponent,
    GamecontrolComponent,
    HudComponent,
    AnswerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
