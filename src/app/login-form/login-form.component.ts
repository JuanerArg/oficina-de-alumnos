import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signin-form',
  standalone: true,
  imports:[FormsModule],
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent{

  User = {
    Email: '',
    Name: '',
    Password: ''
  }

  saveData(){
    console.log(this.User.Email)
    console.log(this.User.Name)
    console.log(this.User.Password)
  }
}