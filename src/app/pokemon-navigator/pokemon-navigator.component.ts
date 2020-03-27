import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Pokemon } from '../core/pokeapi/model/pokemon';
import { PokemonService } from '../core/pokeapi/pokemon.service';
import { RouteService } from '../core/services/route.service';

@Component({
  selector: 'app-pokemon-navigator',
  templateUrl: './pokemon-navigator.component.html',
  styleUrls: ['./pokemon-navigator.component.sass']
})
export class PokemonNavigatorComponent implements OnInit, OnChanges {

  private lastPokemonId = 802

  @Input() current: Pokemon

  previous: Pokemon
  next: Pokemon

  constructor(
    private pokemonService: PokemonService,
    private routeService: RouteService
    ) {
      
    }

  ngOnInit(): void {
    this.load(this.current)
  }

  private load(current: Pokemon) {
    this.loadPrevious(current)
    this.loadNext(current)
  }

  ngOnChanges(changes: SimpleChanges): void {
    let current = changes['current']
    if(current) {
      this.load(current.currentValue)
    }
  }

  loadPrevious(pokemon: Pokemon): void {
    let idToSearch = pokemon.id === 1 ? this.lastPokemonId : pokemon.id - 1
    this.pokemonService.get(idToSearch).then(pokemon => this.previous = pokemon)
  }

  loadNext(pokemon: Pokemon): void {
    let idToSearch = pokemon.id === this.lastPokemonId ? 1 : pokemon.id + 1
    this.pokemonService.get(idToSearch).then(pokemon => this.next = pokemon)
  }

  changePokemon(id: number): void {
    this.routeService.goTo('pokemon', id)
  }
  
}
