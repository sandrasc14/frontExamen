import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialModule } from './shared/modules/material.module';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    // MaterialModule
    FormsModule,
    ReactiveFormsModule,

    // aqui importamos los modulos de angular material
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// Es mi modulo principal para que comparta con todos los componentes
