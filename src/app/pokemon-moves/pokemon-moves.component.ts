import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pokemon-moves',
  templateUrl: './pokemon-moves.component.html',
  styleUrls: ['./pokemon-moves.component.sass']
})
export class PokemonMovesComponent implements OnChanges {

  @Input() moves: Array<any>
  @Input() twoColumns = false
  
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    let moves = changes['moves']
    if(moves) this.moves = moves.currentValue
  }

}
