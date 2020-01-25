import { Component, OnInit } from '@angular/core';
// import {UserService} from '../../services/user.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
  // se esta usando un servicio para los usuarios
})

export class LoginComponent implements OnInit {
  title = '';
  user;
  identity;
  token;
  errorMessage;
  loginForm: FormGroup;

  constructor(private userService: UserService, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      usuario: [''],
      password: ['']
    });

    // cuando tengo un componente tambien tengo un constructor

  }

  ngOnInit() {
    /* this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken(); */
  }

  loginUser() {
    this.userService.loginUser(this.loginForm.value);

    // value es para saber los valores que tiene el formulario
    console.log('hola mundo');
  }

  logout() {
    localStorage.removeItem('identity');
    localStorage.removeItem('token');
    localStorage.clear();
    this.identity = null;
    this.token = null;
    this.errorMessage = null;

  }
}
