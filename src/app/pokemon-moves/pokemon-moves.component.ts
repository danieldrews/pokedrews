import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pokemon-moves',
  templateUrl: './pokemon-moves.component.html',
  styleUrls: ['./pokemon-moves.component.sass']
})
export class PokemonMovesComponent {

  @Input() moves: Array<any>
  @Input() twoColumns = false
  
}
