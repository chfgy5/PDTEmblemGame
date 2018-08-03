import { Component, OnInit, Input, HostBinding, ElementRef } from '@angular/core';
import { Subscription, Observable } from 'rxjs';

import { Character } from '../character';
import { MoveService } from '../move.service';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {
  @Input() terrain: number;
  @Input() location: number;

  observeDrag: Observable<number>;
  character: Character;
  emptyCharacter: Character = { id: 0, img: 'empty.png', location: -1 };
  isValidMove = false;
  isValidAttack = false;
  subscription: Subscription;

  constructor(private moveService: MoveService) {
    moveService.dragAnnounced$.subscribe(
      location => {
        this.showValidMoves(location);
      }
    );
    moveService.dropAnnounced$.subscribe(
      hi => {
        this.removeValidMoveClass();
      }
    );

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

  swapWithLocalCharacter(foreignCharacter) {
    this.character.id = foreignCharacter.id;
    this.character.img = foreignCharacter.img;

    foreignCharacter.id = this.emptyCharacter.id;
    foreignCharacter.img = this.emptyCharacter.img;

    this.character.location = this.location;
  }

  private showValidMoves(characterLocation: number) {
    if (characterLocation === -1 && this.location >= 0 && this.location < 6) {
      this.isValidMove = true;
    } else if (this.terrain !== 1) {
      if (this.location >= characterLocation - 1 && this.location <= characterLocation + 1
                || this.location === characterLocation - 6 || this.location === characterLocation + 6) {
        this.isValidMove = true;
      }
    }
  }

  private removeValidMoveClass()  {
    this.isValidMove = false;
  }
}
