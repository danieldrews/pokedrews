import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/core/pokeapi/model/pokemon';
import { Router } from '@angular/router';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-starter-selector',
  templateUrl: './starter-selector.component.html',
  styleUrls: ['./starter-selector.component.sass']
})
export class StarterSelectorComponent implements OnInit {
  faArrowUp = faArrowUp
  faArrowDown = faArrowDown

  private generations: Array<any>
  selectedGen: any

  constructor(private router: Router) { 
    this.generations = [{
      id: 1,
      name: 'kanto',
      starters: [
        Pokemon.BuildWithId(1),
        Pokemon.BuildWithId(4),
        Pokemon.BuildWithId(7)]
    }, {
      id: 2,
      name: 'jhoto',
      starters: [
        Pokemon.BuildWithId(152),
        Pokemon.BuildWithId(155),
        Pokemon.BuildWithId(158)]
    }, {
      id: 3,
      name: 'hoenn',
      starters: [
        Pokemon.BuildWithId(252),
        Pokemon.BuildWithId(255),
        Pokemon.BuildWithId(258)]
    }]

    this.selectedGen = this.generations[1]
  }

  ngOnInit(): void {
  }

  changeRegion(up?) {
    let id = this.selectedGen.id
    if(up) id += 1
    else id -= 1
    if(id < 1) id = 3
    else if(id > 3) id = 1
    this.changeGeneration(id)
  }

  changeGeneration(id) {
    delete this.selectedGen
    let changeGen = this.generations.filter(g => g.id == id)
    if(changeGen.length > 0)
      this.selectedGen = changeGen[0]
  }

  choose(pokemon) {
    this.router.navigate(['/play'])
  }
}
