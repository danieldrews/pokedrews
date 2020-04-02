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
    if(data['map']) return data

    var newChain = []
    let chain = data['chain']

    let buildChainElm = (evolves_to, vertical = false) => {
      return {
        'species': evolves_to['species']['name'],
        'evolution_details': evolves_to['evolution_details'][0],
        'vertical': vertical
      }
    }
    do {
      let evolves_to = chain['evolves_to']
      newChain.push(buildChainElm(chain));

      if(evolves_to.length > 1) {
        evolves_to.forEach(evolves => newChain.push(buildChainElm(evolves, true)))
        evolves_to = []
      }

      chain = evolves_to[0]
    }while(!!chain && chain.hasOwnProperty('evolves_to'))

    data['chain'] = newChain
    data['map']  = true
    return data 
  }
}
