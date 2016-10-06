import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelComponent } from './panel.component';
import { PanelButtonComponent } from './panel-button/panel-button.component';
import { PanelHeaderComponent } from './panel-header/panel-header.component';
import { PanelContentComponent } from './panel-content/panel-content.component';

@NgModule({
  exports: [
    PanelComponent
  ],
  imports: [
    CommonModule
  ],
  declarations: [
    PanelComponent,
    PanelButtonComponent,
    PanelHeaderComponent,
    PanelContentComponent
  ]
})
export class PanelModule { }
