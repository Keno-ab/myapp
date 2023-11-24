import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CLoginPage } from './c-login.page';

describe('CLoginPage', () => {
  let component: CLoginPage;
  let fixture: ComponentFixture<CLoginPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
