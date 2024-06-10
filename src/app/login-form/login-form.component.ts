import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, MinLengthValidator, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin-form',
  standalone: true,
  imports:[FormsModule, ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent{
  signInForm = new FormGroup({
    Name: new FormControl('', Validators.required),
    Email: new FormControl('' , [Validators.required, Validators.email]),
    Password: new FormControl('', [Validators.required, Validators.minLength(10)])
  });

  handleSubmit(){
    console.log(typeof this.signInForm.value.Name)
    console.log(this.signInForm.value.Name)
    console.log(typeof this.signInForm.value.Email)
    console.log(this.signInForm.value.Email)
    console.log(typeof this.signInForm.value.Password)
    console.log(this.signInForm.value.Password)

    this.signInForm.reset();
  }
}