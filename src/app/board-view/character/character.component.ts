import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Character } from '../../Models/character';
import { MoveService } from '../move.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  @Input() character: Character;
  @Output() moving = new EventEmitter();

  constructor(private moveService: MoveService) {
  }

  ngOnInit() {
  }

  callValidMoves() {
    this.moveService.sendValidMoves(this.character);
  }

  removeValidMoves() {
    this.moveService.removeValidMoves();
  }
}
