import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { PanelComponent, PanelButtonComponent, PanelContentDirective, PanelHeaderDirective } from './panel';

@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    PanelButtonComponent,
    PanelHeaderDirective,
    PanelContentDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
