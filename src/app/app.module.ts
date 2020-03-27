import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AppComponent } from './app.component';

import { PokedexComponent } from './pokedex/pokedex.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { CacheInterceptor } from './core/interceptors/cache-interceptor.service';
import { PokemonNavigatorComponent } from './pokemon-navigator/pokemon-navigator.component';
import { PokemonStatusChartComponent } from './pokemon-status-chart/pokemon-status-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    PokedexComponent,
    PokemonDetailComponent,
    PokemonNavigatorComponent,
    PokemonStatusChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InfiniteScrollModule
  ],
  providers: [{ 
    provide: HTTP_INTERCEPTORS, 
    useClass: CacheInterceptor, 
    multi: true 
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }