import { Component, OnInit, Input } from '@angular/core';

import { Character } from '../character';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {
  @Input() terrain: number;
  @Input() location: number;

  character: Character;
  emptyCharacter: Character = { id: 0, img: 'empty.png', location: -1 };

  constructor() {
    if (this.character == null) {
      this.character = { id: 0, img: 'empty.png', location: this.location  };
    }
  }

  ngOnInit() {
  }

  onMove(event, cell) {
    const newCharacter = event.dragData;

    // using id because object comparrison is being confusing.
    // TODO: fix after database added.
    if (this.character !== newCharacter) {
      if (this.character.id !== this.emptyCharacter.id) {
        if (this.character.id > newCharacter.id) {
          this.swapWithLocalCharacter(newCharacter);
        }
      } else if (cell.terrain !== 1) {
        this.swapWithLocalCharacter(newCharacter);
      }
    }
  }

  public showValidMoves(characterLocation: number) {
    console.log('showing valid moves');
    console.log('CharacterLocation: ' + characterLocation + '\nCellLocation: ' + this.location);
  }

  swapWithLocalCharacter(foreignCharacter) {
    this.character.id = foreignCharacter.id;
    this.character.img = foreignCharacter.img;

    foreignCharacter.id = this.emptyCharacter.id;
    foreignCharacter.img = this.emptyCharacter.img;

    this.character.location = this.location;
  }
}
