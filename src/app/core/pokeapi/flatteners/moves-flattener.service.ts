import { Injectable } from '@angular/core';
import { TypesFlattener } from './types-flattener.service';

@Injectable({
  providedIn: 'root'
})
export class MovesFlattener {

  constructor(private typesFlattener: TypesFlattener) { }

  private movePropsToDelete = ['contest_combos', 'contest_effect','contest_type','damage_class','flavor_text_entries','generation','machines','names','past_values','super_contest_effect']

  flattenSingle(move) {
    this.typesFlattener.flattenSingle(move['type'])
    this.movePropsToDelete.forEach(p => delete move[p])
    return move
  }

  flattenBasic(moves) {
    return moves.map(data => {
      if(data['move']) {
        data['name'] = data['move']['name']
        delete data['move']
      }
      
      data['version_group_details'].map(data => {
        if(typeof data['move_learn_method'] === 'object')
          data['move_learn_method'] = data['move_learn_method']['name']

        if(typeof data['version_group'] === 'object')
          data['version_group'] = data['version_group']['name']
        
        return data
      })
      
      return data
    })
  }
}
