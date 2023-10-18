import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

import { AutentificarService } from './autentificar.service';





describe('AutentificarService', () => {
  let service: AutentificarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutentificarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
