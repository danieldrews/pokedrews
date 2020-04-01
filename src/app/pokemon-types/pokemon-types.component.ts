import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pokemon-types',
  templateUrl: './pokemon-types.component.html',
  styleUrls: ['./pokemon-types.component.sass']
})
export class PokemonTypesComponent implements OnChanges {

  @Input() types: Array<any>

  ngOnChanges(changes: SimpleChanges): void {
    let types = changes['types']
    if(types) this.types = types.currentValue
  }
}
