import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() slideMenu: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
    setTimeout(() => {

      this.slideMenu.emit();
    }, 100);
  }

  public actMenu(): void {
    this.slideMenu.emit();
  }
}
