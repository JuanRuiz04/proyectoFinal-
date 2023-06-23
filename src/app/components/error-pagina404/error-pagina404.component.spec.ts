import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorPagina404Component } from './error-pagina404.component';

describe('ErrorPagina404Component', () => {
  let component: ErrorPagina404Component;
  let fixture: ComponentFixture<ErrorPagina404Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorPagina404Component]
    });
    fixture = TestBed.createComponent(ErrorPagina404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
