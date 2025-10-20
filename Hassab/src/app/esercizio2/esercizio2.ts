import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-esercizio2',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>*ngFor Example</h2>
    <ul>
      <li *ngFor="let frutto of frutti">{{ frutto }}</li>
    </ul>
  `
})
export class Esercizio2Component {
  frutti = ['Mela', 'Banana', 'Arancia', 'Pera'];
}
