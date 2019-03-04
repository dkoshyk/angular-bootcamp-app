import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'boot-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() menuItems; 
  @Output() viewChanged: EventEmitter<string> = new EventEmitter<string>();

  activeView: string;
  dropdownItems: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  selectItem(item: any): void {
    if(item.subItems && item.subItems.length) {
      this.dropdownItems = item.subItems;

      return;
    }

    this.activeView = item.alias;
    this.viewChanged.emit(this.activeView);
  }
}
