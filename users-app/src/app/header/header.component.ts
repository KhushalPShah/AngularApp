import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {

  @Output() tabSelect = new EventEmitter<string>();

  onTabSelect(selector: string) {
    this.tabSelect.emit(selector);
  }
}