import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-sidebar-detail',
  standalone: true,
  imports:[
    NgFor
  ],
  templateUrl: './sidebar-details.component.html',
  styleUrls: ['./sidebar-details.component.css']
})
export class SidebarDetailsComponent {
  @Input() category: string | null = null;

  get items() {
    if (this.category === 'materias') {
      return ['Matemáticas', 'Física', 'Química']; // Ejemplo de materias
    } else if (this.category === 'alumnos') {
      return ['Juan', 'María', 'Pedro']; // Ejemplo de alumnos
    }
    return [];
  }
}
