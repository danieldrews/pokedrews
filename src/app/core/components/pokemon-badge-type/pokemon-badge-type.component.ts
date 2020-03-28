import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pokemon-badge-type',
  templateUrl: './pokemon-badge-type.component.html',
  styleUrls: ['./pokemon-badge-type.component.sass']
})
export class PokemonBadgeTypeComponent implements OnChanges {

  @Input() type: any

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    let type = changes['type']
    if(type) this.type = type.currentValue
  }
}
