import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroEntradaProductosComponent } from './registro-entrada-productos.component';

describe('RegistroEntradaProductosComponent', () => {
  let component: RegistroEntradaProductosComponent;
  let fixture: ComponentFixture<RegistroEntradaProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroEntradaProductosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroEntradaProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
