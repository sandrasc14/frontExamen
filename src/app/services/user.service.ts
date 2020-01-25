import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'

  // los servicios tienen un injectable es para que se puea usar el servicio en el componente
})
export class UserService {

  // esta es la estuctura de un servicio acaba en UserService si es componente acaba en component

  constructor() { }

  loginUser(usuario) {
    //  esta es una funcion que no recibe parametros
    // los parametros son usuario y contrasena

    console.log(usuario);

  }
}
