import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  @Input() type: string;
  @Input() headerText: string;
  @Input() contentText: string;

  panelOpened: boolean;

  constructor() { }

  ngOnInit() {
    this.panelOpened = true;
    this.type = this.type || 'primary';
  }

  toggleOpened() {
    this.panelOpened = !this.panelOpened;
  }
}
