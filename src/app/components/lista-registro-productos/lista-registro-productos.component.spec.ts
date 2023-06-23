import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaRegistroProductosComponent } from './lista-registro-productos.component';

describe('ListaRegistroProductosComponent', () => {
  let component: ListaRegistroProductosComponent;
  let fixture: ComponentFixture<ListaRegistroProductosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaRegistroProductosComponent]
    });
    fixture = TestBed.createComponent(ListaRegistroProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
