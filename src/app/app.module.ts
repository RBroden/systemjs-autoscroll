import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HighlightDirective } from './highlight.directive';
import { AutoScrollDirective } from './autoscroll.directive';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    HighlightDirective,
    AutoScrollDirective
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
