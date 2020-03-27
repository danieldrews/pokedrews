import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pokemon-status-chart',
  templateUrl: './pokemon-status-chart.component.html',
  styleUrls: ['./pokemon-status-chart.component.sass']
})
export class PokemonStatusChartComponent implements OnInit, OnChanges {

  @Input('stats') inputStats: any
  stats: any
  hpStat: any

  constructor() { }

  ngOnInit(): void {
    this.load(this.inputStats)
  }

  ngOnChanges(changes: SimpleChanges): void {
    let stats = changes['stats']
    if(stats) this.load(stats.currentValue)
  }

  load(inputStats) {
    this.stats = [...inputStats]
    this.hpStat = this.stats.pop()
  }

  getStatClassColor(name) {
    let nameColor = {
      'speed': 'pink',
      'special-defense': 'purple',
      'special-attack': 'blue',
      'defense': 'orange',
      'attack': 'yellow'
    }

    return 'stat-color-'.concat(nameColor[name])
  }

}
