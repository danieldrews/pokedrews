import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pokemon-status-chart',
  templateUrl: './pokemon-status-chart.component.html',
  styleUrls: ['./pokemon-status-chart.component.sass']
})
export class PokemonStatusChartComponent implements OnInit, OnChanges {

  @Input('stats') inputStats: any
  stats: any

  constructor() { }

  ngOnInit(): void {
    this.load(this.inputStats)
  }

  ngOnChanges(changes: SimpleChanges): void {
    let inputStats = changes['inputStats']
    if(inputStats) this.load(inputStats.currentValue)
  }

  load(inputStats) {
    this.stats = [...inputStats]
    let hpStat = this.stats.pop()
    let hpStatBar = JSON.parse(JSON.stringify(hpStat))
    hpStatBar.name = 'hpbar'
    this.stats.unshift(hpStatBar)
    this.stats.unshift(hpStat)
  }
}
