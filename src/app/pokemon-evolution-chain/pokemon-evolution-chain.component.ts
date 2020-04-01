import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PokemonSpeciesService } from '../core/pokeapi/pokemon-species.service';
import { EvolutionChainService } from '../core/pokeapi/evolution-chain.service';
import { Pokemon } from '../core/pokeapi/model/pokemon';

@Component({
  selector: 'app-pokemon-evolution-chain',
  templateUrl: './pokemon-evolution-chain.component.html',
  styleUrls: ['./pokemon-evolution-chain.component.sass']
})
export class PokemonEvolutionChainComponent implements OnChanges {

  @Input() pokemon: Pokemon
  evolutionChain: any

  constructor(
    private pokemonSpeciesService: PokemonSpeciesService,
    private evolutionChainService: EvolutionChainService
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    let pokemon = changes['pokemon']
    if(pokemon) this.load(pokemon.currentValue)
  }

  private load(pokemon) {
    this.pokemonSpeciesService.get(pokemon.id).then(data => {
      console.log(data)
      this.loadEvolutionChain(data['evolution_chain'])
    })
  }

  private loadEvolutionChain(evolutionChain) {
    this.evolutionChainService.get(evolutionChain).then(data => {
      console.log(data)
      this.evolutionChain = data
    })
  }

}
