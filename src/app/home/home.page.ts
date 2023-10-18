import { Component } from '@angular/core';
import { AutentificarService } from '../Servicios/autentificar.service';
import { Router,NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})



export class HomePage {

  constructor(private auth:AutentificarService, private router:Router) {}
public mensaje = "";

  



user = {
  usuario: "",
  password: ""
}


/*
  enviarLogin(){
    this.auth.login(this.user.username,this.user.password).then(()=>{
      if (this.auth.activo){
        let navigationExtras: NavigationExtras = {
          state: {user:this.user}
        }
        this.router.navigate(['/mapa']), navigationExtras);
      } else {
        this.mensaje = "Debe ingresar sus credenciales";
      }
*/



enviarLogin() {
        this.auth.login(this.user.usuario, this.user.password).then(() => {
          if (this.auth.autentificado) {
            let navigationExtras: NavigationExtras = {
              state: { user: this.user }
            }
            this.router.navigate(['/mapa'], navigationExtras);
          } else {
            this.mensaje = "Debe ingresar sus credenciales";
          }
        });
      }    


}


