import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { LoginFormComponent } from './login-form/login-form.component';


export const routes: Routes = [
    { path: '', redirectTo:'MainPage', pathMatch: 'full'},
    { path: 'MainPage', component: MainPageComponent },
    { path: 'LoginForm', component: LoginFormComponent },
];
