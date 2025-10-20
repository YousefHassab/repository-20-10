import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-esercizio1',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>*ngIf Example</h2>
    <button (click)="toggle()">Mostra/Nascondi Messaggio</button>
    <p *ngIf="mostraMessaggio">Ciao! Questo è un messaggio condizionale.</p>
  `
})
export class Esercizio1Component {
  mostraMessaggio = true;

  toggle() {
    this.mostraMessaggio = !this.mostraMessaggio;
  }
}
