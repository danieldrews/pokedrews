import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EvolutionChainService {

  private httpGet(path): Observable<any> {
    let fullPath = environment.pokeApiUrl.concat(path)
    return this.httpClient.get(fullPath)
  }
  
  constructor(private httpClient: HttpClient) { }

  get(id: number) {
    return this.httpGet(`evolution-chain/${id}`)
      .pipe(
        tap(content => environment.pokeApiLog ? console.log(content) : undefined),
        map(data => this.mapGet(data))).toPromise()
  }

  private mapGet(data) {
    var newChain = []
    let chain = data['chain']
    do {
      newChain.push({
        'species': chain['species']['name'],
        'evolution_details': chain['evolution_details'][0]
      })
      chain = chain['evolves_to'][0]
    }while(!!chain && chain.hasOwnProperty('evolves_to'))

    data['chain'] = newChain

    return data 
  }
}
