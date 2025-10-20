import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Studente {
  nome: string;
  voto: number;
}

@Component({
  selector: 'app-esercizio4',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container mt-4">
      <h2>Elenco Studenti (con Bootstrap)</h2>

      <div class="mb-3 row">
        <div class="col">
          <input class="form-control" [(ngModel)]="nuovoNome" placeholder="Nome">
        </div>
        <div class="col">
          <input class="form-control" [(ngModel)]="nuovoVoto" type="number" placeholder="Voto">
        </div>
        <div class="col">
          <button class="btn btn-primary" (click)="aggiungiStudente()">Aggiungi</button>
        </div>
      </div>

      <table class="table table-striped">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Voto</th>
            <th>Azioni</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let studente of studenti; let i = index">
            <td>{{ studente.nome }}</td>
            <td>{{ studente.voto }}</td>
            <td>
              <button class="btn btn-danger btn-sm" (click)="rimuoviStudente(i)">Elimina</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  `
})
export class Esercizio4Component {
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
