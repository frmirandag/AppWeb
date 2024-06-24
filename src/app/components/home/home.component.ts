import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // Define una propiedad para controlar la clase de la imagen
  imageClass = 'centered-image';

  constructor() {}

  // Método para cambiar la clase de la imagen
  toggleImageClass() {
    this.imageClass = this.imageClass === 'centered-image' ? 'centered-image-centered' : 'centered-image';
  }
}
