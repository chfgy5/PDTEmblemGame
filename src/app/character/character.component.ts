import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Character } from '../character';
import { CellComponent } from '../cell/cell.component';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  @Input() character: Character;
  @Output() moving = new EventEmitter();

  constructor() {  }

  ngOnInit() {
  }

  callValidMoves() {
    this.moving.emit(this.character.location);
  }
}
