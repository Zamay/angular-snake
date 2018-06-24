import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MyHammerConfig } from './my-hammer.config';
import { AppComponent } from './app.component';
import { BestScoreManager } from './app.storage.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    BestScoreManager,
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig
    }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
