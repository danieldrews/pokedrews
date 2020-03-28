import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TypesFlattener {

  constructor() { }

  flatten(types) {
    return types.map(data => {
      return this.flattenSingle(data)
    }).sort((a , b) => a.slot - b.slot)
  }

  flattenSingle(data) {
    if(data['type']) {
      data['name'] = data['type']['name']
      data['name'] = data['name'] === '???' ? 'unknown': data['name']
      delete data['type']
    } else 
      delete data['url']
    return data
  }

}
