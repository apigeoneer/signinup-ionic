import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  signinForm: FormGroup = this.formBuilder.group({
    email: [
      '',
      [
        Validators.required,
        Validators.pattern(
          // eslint-disable-next-line @typescript-eslint/quotes
          "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$"
        ),
      ],
    ],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  public errorMessages = {
    email: [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Please enter a valid e-mail' },
    ],

    password: [
      { type: 'required', message: 'Password is required' },
      {
        type: 'minlength',
        message: 'Password should be at least 6 characters long',
      },
    ],
  };

  constructor(private formBuilder: FormBuilder) {}

  get email() {
    return this.signinForm.get('email');
  }

  get password() {
    return this.signinForm.get('password');
  }

  ngOnInIt() {}

  onSigninFormSubmit() {
    console.log(this.signinForm.value);
  }
}
