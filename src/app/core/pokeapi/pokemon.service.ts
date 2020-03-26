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
        map(data => this.mapGet(data))).toPromise()
  }

  get(id: number): Observable<Pokemon> {
    return this.httpGet(`pokemon/${id}`)
    .pipe(
      tap(content => console.log(content))
    )
  }

  private mapGet(data): Array<Pokemon> {
    let results = data['results']
    return results.map(res => new Pokemon(res['name'], res['url']))
  }
}
