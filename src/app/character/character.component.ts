import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Character } from '../character';
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
    this.moveService.sendLocation(this.character.location);
  }

  removeValidMoves() {
    console.log('Calling move service');
    this.moveService.removeValidMoves();
  }
}
