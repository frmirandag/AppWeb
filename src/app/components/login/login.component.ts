import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  loginMessage: string = '';

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const username = this.loginForm.value.username;
      const password = this.loginForm.value.password;
      // Aquí deberías implementar la lógica real de autenticación, por ejemplo, llamando a un servicio
      // Por ahora, utilizaremos usuarios de prueba
      if (username === 'admin' && password === 'admin123') {
        // Si la autenticación es exitosa, redirige al componente deseado, por ejemplo, '/home'
        this.router.navigate(['/home']);
      } else {
        this.loginMessage = 'Credenciales incorrectas. Por favor, intenta de nuevo.';
      }
    } else {
      this.loginMessage = 'Por favor, completa todos los campos.';
    }
  }
}
