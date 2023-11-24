import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { HttpClient } from '@angular/common/http';

interface User {
  usuario: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AutentificarService {
  public autentificado: boolean = false;
  public local: Storage | null = null;

  constructor(private http: HttpClient, private global: Storage, private router: Router) {
    this.iniciar();
  }

  async iniciar() {
    const storage = await this.global.create();
    this.local = storage;
  }

  async verificarCredenciales(usuario: string, password: string): Promise<boolean> {
    console.log('Intento de inicio de sesión - Usuario:', usuario, 'Contraseña:', password);

    const url = './assets/db.json';

    try {
      const responseData = await this.http.get<any>(url).toPromise();

      if (responseData && responseData['datos-inicio-sesion']) {
        const datosInicioSesion: User[] = responseData['datos-inicio-sesion'];
        console.log('Datos recuperados del archivo local:', datosInicioSesion);

        const credencialesValidas = datosInicioSesion.some((user: User) => user.usuario === usuario && user.password === password);
        console.log('Credenciales válidas:', credencialesValidas);

        return credencialesValidas;
      } else {
        console.error('La estructura del archivo no es la esperada:', responseData);
        return false;
      }
    } catch (error) {
      console.error('Error al cargar el archivo local:', error);
      return false;
    }
  }
}
