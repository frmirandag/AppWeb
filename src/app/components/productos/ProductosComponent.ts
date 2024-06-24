import { Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {

  // Método para añadir al carrito
  addToCart(productId: number) {
    // Aquí puedes implementar la lógica para añadir al carrito
    console.log(`Añadir producto ${productId} al carrito`);
    // Puedes enviar datos a un servicio de carrito o gestionar el estado del carrito aquí mismo.
  }

}
