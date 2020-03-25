import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokedexComponent } from './pokedex/pokedex.component';
import { PokemonResolver } from './core/resolvers/pokemon.resolver';


const routes: Routes = [{
  path: 'pokedex',
  component: PokedexComponent,
  resolve: {
    pokemons: PokemonResolver
  }
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
