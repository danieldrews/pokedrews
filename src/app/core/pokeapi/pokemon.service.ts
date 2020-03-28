import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Pokemon } from './model/pokemon';
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private httpGet(path): Observable<any> {
    let fullPath = environment.pokeApiUrl.concat(path)
    return this.httpClient.get(fullPath)
  }

  constructor(private httpClient: HttpClient) { }

  getPaginated(offset: number = 0, limit: number = environment.itemLimit): Promise<Pokemon[]> {
    return this.httpGet(`pokemon/?offset=${ offset }&limit=${ limit }`)
      .pipe(
        tap(content => console.log(content)),
        map(data => this.mapGetPaginated(data))).toPromise()
  }

  get(id: number): Promise<Pokemon> {
    return this.httpGet(`pokemon/${id}`)
    .pipe(
      tap(content => console.log(content)),
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
    pokemon.stats = this.flattenStats(data['stats'])
    return pokemon
  }

  private flattenStats(stats) {
    return stats.map(data => {
      if(data['stat']) {
        data['name'] = data['stat']['name']
        delete data['stat']
      }
      return data
    })
  }
}
