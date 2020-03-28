import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoveFilterService {

  constructor() { }

  get(moves: Array<any>, level_learned_at: number, version_group: string, move_learn_method: string) {
    return moves.filter(a => a.version_group_details
        .filter(vgd => 
          vgd.level_learned_at <= level_learned_at && 
          vgd.version_group === version_group &&
          vgd.move_learn_method === move_learn_method).length > 0
      )
  }
}
