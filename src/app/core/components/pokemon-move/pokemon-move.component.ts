import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MoveService } from '../../pokeapi/move.service';

@Component({
  selector: 'app-pokemon-move',
  templateUrl: './pokemon-move.component.html',
  styleUrls: ['./pokemon-move.component.sass']
})
export class PokemonMoveComponent implements OnChanges {

  @Input() slot: number
  @Input('move') inputMove: any
  move: any

  constructor(private moveService: MoveService) { }

  ngOnChanges(changes: SimpleChanges): void {
    let inputMove = changes['inputMove']
    if(inputMove) this.load(inputMove.currentValue)
  }

  load(inputMove) {
    if(!inputMove.id) {
      this.moveService.get(inputMove.name).then(move => {
        this.defineMove(move)
      })
    } else
      this.defineMove(inputMove)
  }

  private defineMove(move) {
    move.name = move.name.replace(/-/g,' ')
    this.move = move
  }

}
