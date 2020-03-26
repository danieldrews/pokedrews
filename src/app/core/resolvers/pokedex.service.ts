import { Injectable } from '@angular/core';
import { PokemonService } from '../pokeapi/pokemon.service';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PokedexResolver implements Resolve<any> {

  constructor(private pokemonService: PokemonService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.pokemonService.getPaginated();
  }
}
