import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatsFlattener {

  constructor() { }

  flatten(stats) {
    return stats.map(data => {
      if(data['stat']) {
        data['name'] = data['stat']['name']
        delete data['stat']
      }
      return data
    })
  }
}
