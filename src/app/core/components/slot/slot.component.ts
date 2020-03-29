import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slot',
  templateUrl: './slot.component.html',
  styleUrls: ['./slot.component.sass']
})
export class SlotComponent {

  slots = new Array<number>(4)

  @Input() slot: number

}
