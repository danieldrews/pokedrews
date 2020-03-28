import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AbilitiesFlattener {

  constructor() { }

  flatten(abilities) {
    return abilities.map(data => {
      if(data['ability']) {
        data['name'] = data['ability']['name']
        delete data['ability']
      }
      return data
    }).sort((a, b) => a.slot - b.slot)
  }

}
