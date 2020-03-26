import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../core/pokeapi/pokemon.service';
import { ActivatedRoute } from '@angular/router';
import { RouteService } from '../core/services/route.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.sass']
})
export class PokedexComponent implements OnInit {

  pokemons: []

  constructor(
    private activatedRoute: ActivatedRoute,
    private routeService: RouteService,
    private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => { 
      this.pokemons = data.pokemons 
    })
  }

  openPokemonDetail(pokemon) {
    this.routeService.goTo('pokemon', pokemon.id)
  }

}
