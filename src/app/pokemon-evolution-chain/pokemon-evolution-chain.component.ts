import { Component, OnInit, Input, OnChanges, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { PokemonSpeciesService } from '../core/pokeapi/pokemon-species.service';
import { EvolutionChainService } from '../core/pokeapi/evolution-chain.service';
import { Pokemon } from '../core/pokeapi/model/pokemon';
import { PokemonService } from '../core/pokeapi/pokemon.service';

@Component({
  selector: 'app-pokemon-evolution-chain',
  templateUrl: './pokemon-evolution-chain.component.html',
  styleUrls: ['./pokemon-evolution-chain.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class PokemonEvolutionChainComponent implements OnChanges {

  @Input() id: number
  evolutionChain: any
  species: any
  
  constructor(
    private pokemonService: PokemonService,
    private pokemonSpeciesService: PokemonSpeciesService,
    private evolutionChainService: EvolutionChainService
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    let id = changes['id']
    if(id) this.load(id.currentValue)
  }

  private load(id) {
    this.pokemonSpeciesService.get(id).then(data => {
      this.species = data
      this.loadEvolutionChain(data['evolution_chain'])
    })
  }

  private loadEvolutionChain(evolutionChain) {
    this.evolutionChainService.get(evolutionChain).then(data => {
      this.evolutionChain = data
      this.loadPokemonData(data['chain'])
    })
  }

  private loadPokemonData(chain) {
    chain.forEach(evolution => this.pokemonService.get(evolution.species).then(pokemon => evolution['pokemon'] = pokemon))
  }

}
