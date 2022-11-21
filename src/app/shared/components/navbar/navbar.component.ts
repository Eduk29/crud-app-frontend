import { Component, Input } from '@angular/core';

@Component({
  selector: 'crud-app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Input() title?: string;

  constructor() {}
}
