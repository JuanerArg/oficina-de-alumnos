import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin-form',
  standalone: true,
  //Importamos ReactiveFormsModule para aplicar formularios reactivos y validadores
  imports:[ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent{
  //Constructor del grupo de controladores de formulario
  signInForm = new FormGroup({
    Name: new FormControl('', Validators.required), //Controlador con validadores default
    //Controlador con validadores especificos para la estructura de Email:
    Email: new FormControl('' , [Validators.required, Validators.email]),
    //Controlador con validadores especificos para un minimo de 10 cifras/caracteres:
    Password: new FormControl('', [Validators.required, Validators.minLength(10)])
  });

  handleSubmit(){
    //Imprimimos el tipo de dato del valor del controlador de formulario del grupo signInForm en consola
    console.log(typeof this.signInForm.value.Name)
    //Imprimimos el valor del controlador de formulario del grupo signInForm en consola
    console.log(this.signInForm.value.Name)
    console.log(typeof this.signInForm.value.Email)
    console.log(this.signInForm.value.Email)
    console.log(typeof this.signInForm.value.Password)
    console.log(this.signInForm.value.Password)
    
    this.signInForm.reset();//Reseteamos los valores del grupo de controladores
  }
}