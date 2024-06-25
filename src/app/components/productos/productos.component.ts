
import { Component } from '@angular/core';

/**
 * Componente para la gestión de productos.
 * 
 * @description
 * Este componente proporciona la funcionalidad para añadir productos al carrito.
 */
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {

  /**
   * Método para añadir un producto al carrito.
   * 
   * @param productId - El ID del producto que se va a añadir al carrito.
   */
  addToCart(productId: number) {
    // Aquí puedes implementar la lógica para añadir al carrito
    console.log("Añadir producto ${productId} al carrito");
    // Puedes enviar datos a un servicio de carrito o gestionar el estado del carrito aquí mismo.
  }

}