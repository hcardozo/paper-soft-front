import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionInventariosComponent } from './gestion-inventarios.component';

describe('GestionInventariosComponent', () => {
  let component: GestionInventariosComponent;
  let fixture: ComponentFixture<GestionInventariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionInventariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionInventariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
