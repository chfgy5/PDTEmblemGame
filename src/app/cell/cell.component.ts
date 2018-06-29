import { Component, OnInit, Input } from '@angular/core';

import { Character } from '../character';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {
  @Input() terrain: number;
  character: Character;

  constructor() {  }

  ngOnInit() {
  }

  moveToCell(event, cell) {
    console.log(event.dragData);
    if (this.character != null) {
      console.log('fighting');
    }

    if (cell.terrain !== 1 ) {
      this.character = event.dragData.character;
      event.dragData.character.img = 'empty.png';
    }
  }
}
