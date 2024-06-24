// carrito.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  cart: any[] = []; // Aquí puedes definir el tipo de datos para los elementos del carrito

  constructor() { }

  ngOnInit(): void {
    this.loadCart(); // Método para cargar los elementos del carrito desde localStorage u otro lugar
  }

  loadCart() {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      this.cart = JSON.parse(storedCart);
    } else {
      this.cart = [];
    }
  }

  removeFromCart(item: any) {
    const index = this.cart.findIndex(i => i.id === item.id);
    if (index !== -1) {
      this.cart.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(this.cart));
    }
  }

  checkout() {
    if (this.cart.length === 0) {
      alert('El carrito está vacío');
    } else {
      alert('Procediendo al pago...');
    }
  }
}
