import { Component } from '@angular/core';
import { RouterOutlet ,RouterLink, RouterLinkActive } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarDetailsComponent } from './sidebar-details/sidebar-details.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    LoginFormComponent, 
    MainPageComponent, 
    RouterLink, 
    RouterLinkActive, 
    SidebarComponent,
    SidebarDetailsComponent,
    NgIf
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  selectedCategory: string | null = null;

  onCategorySelected(category: string) {
    this.selectedCategory = category;
  }
}
