import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Studente {
  nome: string;
  voto: number;
}

@Component({
  selector: 'app-esercizio3',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h2>Gestione Studenti</h2>

    <input [(ngModel)]="nuovoNome" placeholder="Nome">
    <input [(ngModel)]="nuovoVoto" type="number" placeholder="Voto">
    <button (click)="aggiungiStudente()">Aggiungi</button>

    <ul>
      <li *ngFor="let studente of studenti; let i = index">
        {{ studente.nome }} - {{ studente.voto }}
        <button (click)="rimuoviStudente(i)">Elimina</button>
      </li>
    </ul>
  `
})
export class Esercizio3Component {
  studenti: Studente[] = [];
  nuovoNome = '';
  nuovoVoto: number = 0;

  aggiungiStudente() {
    if (this.nuovoNome && this.nuovoVoto > 0) {
      this.studenti.push({ nome: this.nuovoNome, voto: this.nuovoVoto });
      this.nuovoNome = '';
      this.nuovoVoto = 0;
    }
  }

  rimuoviStudente(indice: number) {
    this.studenti.splice(indice, 1);
  }
}
