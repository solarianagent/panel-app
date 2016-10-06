import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'panel-content',
  templateUrl: './panel-content.component.html',
  styleUrls: ['./panel-content.component.css']
})
export class PanelContentComponent {
  @Input() contentText:string;

  constructor() { }
}
