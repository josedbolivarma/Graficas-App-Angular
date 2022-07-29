import { Component } from '@angular/core';

interface MenuItem {
  ruta: string;
  texto: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
    `
    li {
      cursor: pointer;
    }
    `
  ]
})
export class MenuComponent {

  menu: MenuItem[] = [
    {
      ruta: '/grafica/barra',
      texto: 'Barras'
    },
    {
      ruta: '/grafica/barra-doble',
      texto: 'Barras Doble'
    },
    {
      ruta: '/grafica/dona',
      texto: 'Dona'
    },
    {
      ruta: '/grafica/dona-http',
      texto: 'Dona Http'
    }
  ]

}