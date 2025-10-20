import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Esercizio4 } from './esercizio4';

describe('Esercizio4', () => {
  let component: Esercizio4;
  let fixture: ComponentFixture<Esercizio4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Esercizio4]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Esercizio4);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
