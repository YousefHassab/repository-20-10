import { Component, signal } from '@angular/core';
import { Componente1 } from './componente1/componente1';
import { Esercizio1Component } from './esercizio1/esercizio1';
import { Esercizio2Component } from './esercizio2/esercizio2';
import { Esercizio3Component } from './esercizio3/esercizio3';
import { Esercizio4Component } from './esercizio4/esercizio4';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Componente1,
    Esercizio1Component,
    Esercizio2Component,
    Esercizio3Component,
    Esercizio4Component
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Hassab');
}
