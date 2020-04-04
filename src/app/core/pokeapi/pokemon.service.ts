import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Pokemon } from './model/pokemon';
import { TypesFlattener } from './flatteners/types-flattener.service';
import { StatsFlattener } from './flatteners/stats-flattener.service';
import { MovesFlattener } from './flatteners/moves-flattener.service';
import { AbilitiesFlattener } from './flatteners/abilities-flattener.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private httpGet(path): Observable<any> {
    let fullPath = environment.pokeApiUrl.concat(path)
    return this.httpClient.get(fullPath)
  }

  constructor(
    private httpClient: HttpClient,
    private typesFlattener: TypesFlattener,
    private statsFlattener: StatsFlattener,
    private movesFlattener: MovesFlattener,
    private abilitiesFlattener: AbilitiesFlattener) { }

  getPaginated(offset: number = 0, limit: number = environment.itemLimit): Promise<Pokemon[]> {
    return this.httpGet(`pokemon/?offset=${ offset }&limit=${ limit }`)
      .pipe(
        tap(content => console.log(content)),
        map(data => this.mapGetPaginated(data))).toPromise()
  }

  get(id: any): Promise<Pokemon> {
    return this.httpGet(`pokemon/${id}`)
    .pipe(
      tap(content => environment.pokeApiLog ? console.log(content) : undefined),
      map(data => this.mapGet(data))
    ).toPromise()
  }

  private mapGetPaginated(data): Array<Pokemon> {
    let results = data['results']
    return results.map(res => new Pokemon(res['name'], res['url']))
  }

  private mapGet(data): Pokemon {
    let pokemon = new Pokemon(data['name'], '/'.concat(data['id'], '/'))
    pokemon.frontSpriteUrl = data['sprites']['front_default']
    pokemon.stats = this.statsFlattener.flatten(data['stats'])
    pokemon.types = this.typesFlattener.flatten(data['types'])
    pokemon.moves = this.movesFlattener.flattenBasic(data['moves'])
    pokemon.abilities = this.abilitiesFlattener.flatten(data['abilities'])
    return pokemon
  }


}
