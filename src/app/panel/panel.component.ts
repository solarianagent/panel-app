import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  @Input() headerText: string;
  @Input() contentText: string;
  @Input() textColor: string;
  @Input() backgroundColor: string;

  panelOpened: boolean;
  headerStyles: Object;

  constructor() { }

  ngOnInit() {
    this.panelOpened = true;

    this.headerStyles = {
      color: this.textColor,
      background: this.backgroundColor
    }
  }

  toggleOpened() {
    this.panelOpened = !this.panelOpened;
  }
}
