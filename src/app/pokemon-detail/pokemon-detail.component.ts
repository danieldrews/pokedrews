import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.sass']
})
export class PokemonDetailComponent implements OnInit {

  pokemon: any

  //to remove
  possibleTypes
  
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => { 
      this.pokemon = data.pokemon
    })

    this.possibleTypes = [{
      "slot": 1,
      "name": "normal"
    },{
      "slot": 2,
      "name": "fire"
    },{
      "slot": 3,
      "name": "fighting"
    },{
      "slot": 4,
      "name": "water"
    },{
      "slot": 5,
      "name": "flying"
    },{
      "slot": 6,
      "name": "grass"
    },{
      "slot": 7,
      "name": "poison"
    },{
      "slot": 8,
      "name": "electric"
    },{
      "slot": 9,
      "name": "ground"
    },{
      "slot": 10,
      "name": "psychic"
    },{
      "slot": 11,
      "name": "rock"
    },{
      "slot": 12,
      "name": "ice"
    },{
      "slot": 13,
      "name": "bug"
    },{
      "slot": 14,
      "name": "dragon"
    },{
      "slot": 15,
      "name": "ghost"
    },{
      "slot": 16,
      "name": "dark"
    },{
      "slot": 17,
      "name": "steel"
    },{
      "slot": 18,
      "name": "fairy"
    },{
      "slot": 19,
      "name": "unknown"
    }]
  }

}
