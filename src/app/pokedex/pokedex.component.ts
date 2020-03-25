import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../core/pokeapi/pokemon.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.sass']
})
export class PokedexComponent implements OnInit {

  pokemons: []

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => { this.pokemons = data.pokemons })
  }

  getPokemonImghUrl(url: string): string {
    let arrUrl = url.split('/')
    let id = arrUrl[arrUrl.length - 2]
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${ id.padStart(3,'0') }.png`
  }

}
