import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/core/pokeapi/model/pokemon';
import { Router } from '@angular/router';
@Component({
  selector: 'app-starter-selector',
  templateUrl: './starter-selector.component.html',
  styleUrls: ['./starter-selector.component.sass']
})
export class StarterSelectorComponent implements OnInit {

  generations: Array<any>
  selectedGen: any

  constructor(private router: Router) { 
    this.generations = [{
      id: 1,
      starters: [
        Pokemon.BuildWithId(1),
        Pokemon.BuildWithId(4),
        Pokemon.BuildWithId(7)]
    }, {
      id: 2,
      starters: [
        Pokemon.BuildWithId(152),
        Pokemon.BuildWithId(155),
        Pokemon.BuildWithId(158)]
    }, {
      id: 3,
      starters: [
        Pokemon.BuildWithId(252),
        Pokemon.BuildWithId(255),
        Pokemon.BuildWithId(258)]
    }]

    this.selectedGen = this.generations[1]
  }

  ngOnInit(): void {
  }

  changeGeneration($event) {
    let genId = $event.target.value
    delete this.selectedGen
    let changeGen = this.generations.filter(g => g.id == genId)
    if(changeGen.length > 0)
      this.selectedGen = changeGen[0]
  }

  choose(pokemon) {
    this.router.navigate(['/play'])
  }
}
