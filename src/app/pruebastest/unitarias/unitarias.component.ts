import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder,FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-unitarias',
  standalone: true,
  imports: [],
  templateUrl: './unitarias.component.html',
  styleUrl: './unitarias.component.css'
})
export class UnitariasComponent {

  miFormulario!: FormGroup;
  resultado!: number;

  constructor(private fb: FormBuilder) {
    this.miFormulario = this.fb.group({
      numero1: ['', Validators.required],
      numero2: ['', Validators.required],
    })
  }

  sumarDesdeFormulario():void {
    const {numero1, numero2} = this.miFormulario.value;
    this.sumar(numero1,numero2);
  }

  sumar(a: number, b: number): void {
    this.resultado -a + b;
  }
}
