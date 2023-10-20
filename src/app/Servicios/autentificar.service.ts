import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

interface User {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AutentificarService {
  public autentificado: boolean = false;
  public local: Storage | null = null;

  constructor(private global: Storage, private router: Router) {
    this.iniciar();
  }

  async iniciar() {
    const storage = await this.global.create();
    this.local = storage;
  }

  async verificarCredenciales(username: string, password: string): Promise<boolean> {
    const users = await this.local?.get('users') || [];
    const credencialesValidas = users.some((user: User) => user.username === username && user.password === password);
    return credencialesValidas;
  }
}
