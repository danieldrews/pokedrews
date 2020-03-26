import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Pokemon } from './model/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private httpGet(path): Observable<any> {
    let fullPath = environment.pokeApiUrl.concat(path)
    return this.httpClient.get(fullPath)
  }

  constructor(private httpClient: HttpClient) { }

  get(offset: number = 0, limit: number = 20): Observable<Pokemon[]> {
    return this.httpGet(`pokemon/?offset=${ offset }&limit=${ limit }`)
      .pipe(
        tap(content => console.log(content)),
        map(data => this.mapGet(data)))
  }

  private mapGet(data): Array<Pokemon> {
    let results = data['results']
    return results.map(res => new Pokemon(res['name'], res['url']))
  }
}
