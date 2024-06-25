import { Component } from '@angular/core';

/**
 * Componente para la autenticación de usuarios.
 * 
 * Este componente maneja el formulario de inicio de sesión y realiza la autenticación básica.
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  errorMessage(errorMessage: any) {
    throw new Error('Method not implemented.');
  }
  showPopup(showPopup: any) {
    throw new Error('Method not implemented.');
  }
  login(login: any) {
    throw new Error('Method not implemented.');
  }

  /** Mensaje de estado del inicio de sesión, que se muestra en caso de error de autenticación. */
  loginMessage: string = '';

  constructor() {}

  /**
   * Maneja el evento de envío del formulario de inicio de sesión.
   * Realiza la autenticación básica utilizando valores estáticos para demostración.
   * 
   * @returns {void}
   */
  onSubmit(): void {
    const username = (document.getElementById('username') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;

    // Lista estática de usuarios para demostración
    const users = [
      { username: 'admin', password: 'admin123', role: 'admin' },
      { username: 'user', password: 'user123', role: 'user' }
    ];

    // Busca el usuario en la lista por nombre de usuario y contraseña
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
      // Almacena el usuario autenticado en el almacenamiento local
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      // Redirige a la página principal después de la autenticación
      window.location.href = '/index.html'; // Ajusta la URL según tu estructura de archivos
    } else {
      // Muestra un mensaje de error si las credenciales no son válidas
      this.loginMessage = 'Nombre de usuario o contraseña incorrectos';
    }
  }
}
