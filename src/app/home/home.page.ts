import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  readonly persons: Person[] = [
    { name: 'Juan', surnames: 'Pérez', age: 30 },
    { name: 'María', surnames: 'González López', age: 25 },
    { name: 'Carlos', surnames: 'López Pepo', age: 35 },
    { name: 'Ana', surnames: 'Martínez', age: 28 },
    { name: 'Pedro', surnames: 'Sánchez García', age: 40 },
    { name: 'Lucía', surnames: 'Ramírez', age: 22 },
    { name: 'Pepe Luis', surnames: 'Torres Yuste', age: 32 },
    { name: 'Clara', surnames: 'Hernández', age: 27 },
    { name: 'Diego', surnames: 'Jiménez', age: 31 },
    { name: 'Elena', surnames: 'Morales', age: 29 },
    { name: 'Fernando', surnames: 'Castillo', age: 26 },
    { name: 'Isabel', surnames: 'Salazar Romero', age: 24 },
    { name: 'Raúl', surnames: 'Mendoza', age: 39 },
    { name: 'Patricia', surnames: 'García Solera', age: 32 },
    { name: 'Sergio', surnames: 'Cruz', age: 36 },
    { name: 'Valeria', surnames: 'Rojas', age: 23 },
    { name: 'Alejandro', surnames: 'Luna', age: 38 },
    { name: 'Mariana', surnames: 'Ponce', age: 21 },
    { name: 'Andrés', surnames: 'Vázquez', age: 34 },
    { name: 'Carmen', surnames: 'Fernández Ruiz', age: 30 },
    { name: 'Javier', surnames: 'Moreno Sánchez', age: 27 }
  ];

  constructor(
    private cdr: ChangeDetectorRef,
  ) {}

}

export interface Person {
  name: string;
  surnames: string;
  age: number;
}
