import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { PokemonService } from '../pokeapi/pokemon.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonResolver implements Resolve<any> {

  constructor(private pokemonService: PokemonService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let id = route.params.id
    return this.pokemonService.get(id)
  }
}
