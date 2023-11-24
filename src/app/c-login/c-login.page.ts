import { Component, OnDestroy } from '@angular/core';
import { AutentificarService } from '../Servicios/autentificar.service';
import { Router, NavigationExtras } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-c-login',
  templateUrl: './c-login.page.html',
  styleUrls: ['./c-login.page.scss'],
})
export class CLoginPage implements OnDestroy {

  private miSuscripcion: Subscription | undefined;

  constructor(private auth: AutentificarService, private router: Router, private http: HttpClient) {}

  public mensaje = "";

  conductor = {
    usuario: "",
    password: ""
  }

  guardarDatosInicioSesion(usuario: string, password: string) {
    const datos = { usuario, password };

    this.miSuscripcion = this.http.post('http://localhost:3000/datos-inicio-sesion', datos).subscribe(
      (respuesta) => {
        console.log('Datos de inicio de sesión guardados:', respuesta);
      },
      (error) => {
        console.error('Error al guardar datos de inicio de sesión:', error);
      }
    );
  }

  enviarLogin() {
    if (this.conductor.usuario && this.conductor.password) {
      this.auth.verificarCredenciales(this.conductor.usuario, this.conductor.password).then((credencialesValidas) => {
        if (credencialesValidas) {
          this.guardarDatosInicioSesion(this.conductor.usuario, this.conductor.password);

          let navigationExtras: NavigationExtras = {
            state: { conductor: this.conductor }
          };

          this.router.navigate(['/c-pasajeros'], navigationExtras);
        } else {
          this.mensaje = "Credenciales inválidas";
        }
      });
    } else {
      this.mensaje = "Debe ingresar tanto el usuario como la contraseña";
    }
  }

  ngOnDestroy() {
    if (this.miSuscripcion) {
      this.miSuscripcion.unsubscribe(); // Cancela la suscripción en OnDestroy
    }
  }
}
