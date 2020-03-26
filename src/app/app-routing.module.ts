import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokedexComponent } from './pokedex/pokedex.component';
import { PokemonResolver } from './core/resolvers/pokemon.resolver';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokedexResolver } from './core/resolvers/pokedex.service';


const routes: Routes = [
  {
    path: 'pokedex',
    component: PokedexComponent,
    resolve: {
      pokemons: PokedexResolver
  }
  }, {
    path: 'pokemon/:id',
    component: PokemonDetailComponent,
    resolve: {
      pokemon: PokemonResolver
    }
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
