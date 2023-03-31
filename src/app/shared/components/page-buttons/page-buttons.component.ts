import { Component } from '@angular/core';

@Component({
  selector: 'crud-app-page-buttons',
  templateUrl: './page-buttons.component.html',
  styleUrls: ['./page-buttons.component.scss'],
})
export class PageButtonsComponent {
  constructor() {}

  public back(): void {
    history.back();
  }
}
