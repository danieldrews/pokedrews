import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent {

  routes = [{
    link: '/pokedex',
    name: 'pokedex'
  }, {
    link: '/game',
    name: 'game'
  }]

}
