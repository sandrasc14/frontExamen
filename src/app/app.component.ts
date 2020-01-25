import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // OnInit es el ciclo de vida de un componente, siempre incia con eso
  // mi componente se llama AppComponet
  // siempre sw pone export class para exportar
  // para comentar ctrl k c

  // tengo una variable  que se title y su valor es fronted cine
  // alt direccional para mover líneas

  // Un componete va acompañado de CSS HTML TS
  titulo = 'Welcome to Cine Star Wars';
  subtitulo = 'Horario del cine';
  listaHorario = [
    {
      dia: 'Lunes', hora: '3 pm - 10 pm'
      // mi objeto tiene dos atributos dia y hora
    },
    {
      dia: 'Martes'
    },
    {
      dia: 'Miercoles'
    },
    {
      dia: 'Jueves'
    },
    {
      dia: 'Viernes'
    },
    {
      dia: 'Sabado'
    },
    {
      dia: 'Domingo'
    }
    // llaves es un objeto
  ];

  lista = ['lunes', 'martes', 'miercoles'];
  // corchetes es un arreglo convencional

  ngOnInit() {
// console.log(this.listaHorario[0], this.lista[0]);
  }

  // esto es una funcion lo que esta dentro de parentesis son sus parametros, lo que le llega
  asignarPrecios() {

  }
}
