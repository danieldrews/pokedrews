import { Component, Input, OnChanges, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-pokemon-types',
  templateUrl: './pokemon-types.component.html',
  styleUrls: ['./pokemon-types.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class PokemonTypesComponent implements OnChanges {

  @Input() types: Array<any>

  ngOnChanges(changes: SimpleChanges): void {
    let types = changes['types']
    if(types) this.types = types.currentValue
  }
}
