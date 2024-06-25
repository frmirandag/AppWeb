import { Component } from '@angular/core';

/**
 * Componente para gestionar un carrito de compras.
 */
@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {
  addToCart(product: any) {
    throw new Error('Method not implemented.');
  }
  /** Array que contiene los elementos del carrito. */
  cart: any[] = [];

  constructor() {
    this.loadCart();
  }

  /**
   * Carga los elementos del carrito desde el almacenamiento local.
   */
  loadCart(): void {
    const storedCart = localStorage.getItem('cart');
    this.cart = storedCart ? JSON.parse(storedCart) : [];
  }

  /**
   * Elimina un elemento del carrito.
   * @param item El elemento que se va a eliminar del carrito.
   */
  removeFromCart(item: any): void {
    const index = this.cart.findIndex(i => i.id === item.id);
    if (index !== -1) {
      this.cart.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(this.cart));
    }
  }

  /**
   * Limpia todos los elementos del carrito.
   */
  clearCart(): void {
    this.cart = [];
    localStorage.removeItem('cart');
  }

  /**
   * Procesa el pago si el carrito contiene elementos; muestra una alerta si está vacío.
   */
  checkout(): void {
    if (this.cart.length === 0) {
      alert('El carrito está vacío');
    } else {
      alert('Procediendo al pago...');
      // Aquí podrías implementar la lógica para procesar el pago
    }
  }

  /**
   * Calcula el subtotal del carrito sumando los precios de todos los elementos.
   * @returns El subtotal calculado.
   */
  calculateSubtotal(): number {
    return this.cart.reduce((acc, item) => acc + item.price, 0);
  }

  /**
   * Calcula el total del carrito.
   * @returns El total calculado (en este caso, igual al subtotal).
   * Esta función podría ser expandida para incluir impuestos, descuentos, etc.
   */
  calculateTotal(): number {
    // Aquí podrías implementar lógica para calcular impuestos, envío, descuentos, etc.
    return this.calculateSubtotal();
  }
}
