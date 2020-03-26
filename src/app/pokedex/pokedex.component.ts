import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../core/pokeapi/pokemon.service';
import { ActivatedRoute } from '@angular/router';
import { RouteService } from '../core/services/route.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.sass']
})
export class PokedexComponent implements OnInit {

  private offset = 0

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

  onScroll() {
    this.offset += environment.itemLimit
    this.pokemonService.getPaginated(this.offset).then(pokemons => Array.prototype.push.apply(this.pokemons, pokemons))
  }

}
