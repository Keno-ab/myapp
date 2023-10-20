import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



interface UsuarioData {
  usuario: string;
  correo: string;
  password: string;
}

@Component({
  selector: 'app-crearcuenta',
  templateUrl: './crearcuenta.page.html',
  styleUrls: ['./crearcuenta.page.scss'],
})
export class CrearcuentaPage {
  registrationForm: FormGroup;
  mensajeError = '';

  constructor(private http: HttpClient, private router: Router, private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      usuario: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  registroUsuario() {
    if (this.registrationForm.valid) {
      const usuario = this.registrationForm.value.usuario;
      const correo = this.registrationForm.value.correo;
      const password = this.registrationForm.value.password;

      this.http
        .get<UsuarioData[]>(`http://localhost:3000/datos-inicio-sesion?usuario=${usuario}`)
        .subscribe(
          (respuesta) => {
            if (respuesta.length > 0) {
              this.mensajeError = 'El nombre de usuario ya existe. Elija otro nombre de usuario.';
            } else {
              const datosRegistro: UsuarioData = { usuario, correo, password };
              this.http
                .post('http://localhost:3000/datos-inicio-sesion', datosRegistro)
                .subscribe(
                  (registroExitoso) => {
                    console.log('Registro exitoso:', registroExitoso);
                    this.router.navigate(['/home']);
                  },
                  (error) => {
                    console.error('Error en el registro:', error);
                  }
                );
            }
          },
          (error) => {
            console.error('Error al verificar el nombre de usuario:', error);
          }
        );
    }
  }
}




