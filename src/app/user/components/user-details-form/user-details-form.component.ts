import { Component, Input } from '@angular/core';

import { User } from './../../model/user.model';

@Component({
  selector: 'crud-app-user-details-form',
  templateUrl: './user-details-form.component.html',
  styleUrls: ['./user-details-form.component.scss'],
})
export class UserDetailsFormComponent {
  @Input() displayTitle: boolean = true;
  @Input() user?: User;

  constructor() {}
}
