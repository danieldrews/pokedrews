import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { tap, map } from 'rxjs/operators';
import { MovesFlattener } from './flatteners/moves-flattener.service';

@Injectable({
  providedIn: 'root'
})
export class MoveService {

  private httpGet(path): Observable<any> {
    let fullPath = environment.pokeApiUrl.concat(path)
    return this.httpClient.get(fullPath)
  }
  
  constructor(
    private httpClient: HttpClient,
    private movesFlattener: MovesFlattener) { }

  get(id: string): Promise<any> {
    return this.httpGet(`move/${id}`)
    .pipe(
      tap(content => environment.pokeApiLog ? console.log(content) : undefined),
      map(data => this.movesFlattener.flattenSingle(data))
    ).toPromise()
  }
}
