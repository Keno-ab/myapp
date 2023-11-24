import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CPasajerosPage } from './c-pasajeros.page';

describe('CPasajerosPage', () => {
  let component: CPasajerosPage;
  let fixture: ComponentFixture<CPasajerosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CPasajerosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
