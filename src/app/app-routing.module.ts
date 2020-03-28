import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokedexComponent } from './pokedex/pokedex.component';
import { PokemonResolver } from './core/resolvers/pokemon.resolver';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokedexResolver } from './core/resolvers/pokedex.service';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';


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
  }, { 
    path: '',
    redirectTo: '/pokedex',
    pathMatch: 'full'
  }, { 
    path: '**', 
    component: PageNotFoundComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
