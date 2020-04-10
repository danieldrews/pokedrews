import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AppComponent } from './app.component';

import { PokedexComponent } from './pokedex/pokedex.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonNavigatorComponent } from './pokemon-navigator/pokemon-navigator.component';
import { PokemonStatusChartComponent } from './pokemon-status-chart/pokemon-status-chart.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { PokemonBadgeTypeComponent } from './core/components/pokemon-badge-type/pokemon-badge-type.component';
import { PokemonTypesComponent } from './pokemon-types/pokemon-types.component';
import { PokemonMoveComponent } from './core/components/pokemon-move/pokemon-move.component';
import { PokemonMovesComponent } from './pokemon-moves/pokemon-moves.component';
import { SlotComponent } from './core/components/slot/slot.component';
import { PokemonEvolutionChainComponent } from './pokemon-evolution-chain/pokemon-evolution-chain.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    PokedexComponent,
    PokemonDetailComponent,
    PokemonNavigatorComponent,
    PokemonStatusChartComponent,
    PageNotFoundComponent,
    PokemonBadgeTypeComponent,
    PokemonTypesComponent,
    PokemonMoveComponent,
    PokemonMovesComponent,
    SlotComponent,
    PokemonEvolutionChainComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InfiniteScrollModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [{ 
    provide: LocationStrategy, 
    useClass: HashLocationStrategy 
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }