import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { UtilsService } from '../services/utils.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonSpeciesService {

  private httpGet(path): Observable<any> {
    let fullPath = environment.pokeApiUrl.concat(path)
    return this.httpClient.get(fullPath)
  }
  
  private movePropsToDelete = ['egg_groups', 'flavor_text_entries', 'form_descriptions', 'genera', 'generation', 'growth_rate', 'habitat', 'names', 'pal_park_encounters', 'pokedex_numbers', 'shape', 'varieties']

  constructor(private httpClient: HttpClient) { }

  get(id: number) {
    return this.httpGet(`pokemon-species/${id}`)
      .pipe(
        tap(content => environment.pokeApiLog ? console.log(content) : undefined),
        map(data => this.mapGet(data))).toPromise()
  }

  private mapGet(data) {
    if(typeof data['evolution_chain'] === 'object')
      data['evolution_chain'] = UtilsService.getIdFromUrl(data['evolution_chain']['url'])

    if(data['evolves_from_species'] && typeof data['evolves_from_species'] === 'object')
      data['evolves_from_species'] = data['evolves_from_species']['name']

    if(data['color'] && typeof data['color'] === 'object')
      data['color'] = data['color']['name']

    this.movePropsToDelete.forEach(p => delete data[p])

    return data
  }
}
