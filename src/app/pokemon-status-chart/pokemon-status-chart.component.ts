import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pokemon-status-chart',
  templateUrl: './pokemon-status-chart.component.html',
  styleUrls: ['./pokemon-status-chart.component.sass']
})
export class PokemonStatusChartComponent implements OnChanges {

  @Input('stats') inputStats: any
  @Input() showHpBar = false
  stats: any

  ngOnChanges(changes: SimpleChanges): void {
    let inputStats = changes['inputStats']
    if(inputStats) this.load(inputStats.currentValue)
  }

  load(inputStats) {
    this.stats = [...inputStats]
    let hpStat = this.stats.pop()
    let hpStatBar = JSON.parse(JSON.stringify(hpStat))
    hpStatBar.name = 'hpbar'
    if(!this.showHpBar)
      this.stats.unshift(hpStatBar)
    this.stats.unshift(hpStat)
  }
}
