import { Injectable } from '@angular/core';
import { async } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';


interface User{
  username: String,
  password: String,
}


@Injectable({
  providedIn: 'root'
})


export class AutentificarService {
  public autentificado!: Boolean;
  public local!: Storage;




  constructor(private global: Storage, private router: Router) { 
    this.iniciar();
  }
  async iniciar(){
    const storage = await this.global.create();
    this.local = storage
  }


  
  async register(username: string, password: string){
    const users = await this.local?.get('users') || [];
    const existe = users.find((us:User)=> us.username === username && us.password === password);
    if (existe){
      console.log("Este Usuario ya existe")
      return true
    } else{
      const nuevo: User = {username,password};
      users.push(nuevo);
      await this.local.set('users',users);
      console.log("Registrado Exitosamente")
      return false
    }
  }
  
  
  
  async login (username:String, password: String):Promise<Boolean>{
    const users = await this.local.get('users') || [];
    const user = users.find((us:User)=> us.username===username && us.password===password);
    if(users){
      this.autentificado = true;
      return true;
    }
    this.autentificado = false;
    return false;
  }


  logout(){
    this.autentificado=false;
    this.router.navigate(['/home']);
  }
}




/*
login(username: any, password: any){
if (username == ''  && password == '') {
  this.activo == true;
  this.user.username = username;
  this.user.passname = passname;

}


} */