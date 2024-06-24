import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ContactoComponent } from './components/contacto/contacto.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ContactoComponent,
    FormularioComponent,
    RouterLink
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AppWeb';
  isResponsive: boolean = false;

  toggleMenu(): void {
    this.isResponsive = !this.isResponsive;
  }

  logout() {
    localStorage.removeItem('loggedInUser');
    window.location.href = '/login.html';
  }
}
