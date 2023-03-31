import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UserFormComponent } from 'src/app/user/components/user-form/user-form.component';

import { FormTypeEnum } from './../../../shared/enums/form-type.enum';
import { DateUtils } from './../../../shared/utils/date.utils';
import { Person } from './../../models/person.model';

@Component({
  selector: 'crud-app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.scss'],
})
export class PersonFormComponent implements OnChanges {
  @ViewChild('userForm') userFormComponent: UserFormComponent =
    {} as UserFormComponent;

  @Input() formType?: string;
  @Input() person?: Person;
  @Output() formSubmitEventEmitter = new EventEmitter<Person>();

  public displayUserForm: boolean = false;
  public personForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.personForm = this.constructNewPersonForm(formBuilder);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!!this.person) {
      this.personForm.patchValue({
        ...this.person,
        birthday: DateUtils.convertDate(this.person.birthday),
      });
      this.userFormComponent.userForm.patchValue({ ...this.person.user });
    }
  }

  public get buttonLabel(): string {
    return this.formType === FormTypeEnum.EDITION ? 'Update' : 'Create';
  }

  public get userFormButtonColor(): string {
    return !this.displayUserForm ? 'primary' : 'error';
  }

  public back(): void {
    history.back();
  }

  public onSubmit(): void {
    const convertedDateToISOString = DateUtils.convertStringToIsoDate(
      this.personForm.controls['birthday'].value
    );
    this.person = {
      ...this.person,
      ...this.personForm.value,
      birthday: convertedDateToISOString,
      user: { ...this.person?.user, ...this.userFormComponent.userForm.value },
    };

    this.formSubmitEventEmitter.emit(this.person);
  }

  public resetForm(): void {
    this.personForm.reset();
    Object.keys(this.personForm.controls).forEach(key => {
      const control = this.personForm.controls[key];
      control.markAsPristine();
      control.markAsUntouched();
      control.setErrors(null);
    });
    this.userFormComponent.resetForm();
  }

  public toggleUserForm(): void {
    this.displayUserForm = !this.displayUserForm;
  }

  private constructNewPersonForm(formBuilder: FormBuilder): FormGroup {
    return formBuilder.group({
      name: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
      birthday: new FormControl('', Validators.required),
    });
  }
}
