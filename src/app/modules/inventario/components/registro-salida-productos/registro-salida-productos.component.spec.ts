import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroSalidaProductosComponent } from './registro-salida-productos.component';

describe('RegistroSalidaProductosComponent', () => {
  let component: RegistroSalidaProductosComponent;
  let fixture: ComponentFixture<RegistroSalidaProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroSalidaProductosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroSalidaProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
