import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { FormTypeEnum } from 'src/app/shared/enums/form-type.enum';

@Component({
  selector: 'crud-app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent {
  @Input() formType?: string;
  @Input() displayFormTitle: boolean = true;

  public userForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.constructNewUserForm(formBuilder);
  }

  public get editionFormType(): boolean {
    return this.formType === FormTypeEnum.EDITION;
  }

  public get formTitle(): string {
    return !!this.editionFormType ? 'Edition Form' : 'Details';
  }

  public resetForm(): void {
    this.userForm.reset();
  }

  private constructNewUserForm(formBuilder: FormBuilder): FormGroup {
    return formBuilder.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }
}
