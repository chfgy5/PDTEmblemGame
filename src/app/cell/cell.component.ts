import { Component, OnInit, Input, HostBinding, ElementRef } from '@angular/core';
import { Subscription, Observable } from 'rxjs';

import { Character, mockCharacters } from '../character';
import { MoveService } from '../move.service';
import { Actions } from '../actions';

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
  emptyCharacter: Character = mockCharacters[0];
  isValidMove = false;
  isValidAttack = false;
  subscription: Subscription;

  isDroppable = (dragData: any) => {
    return this.isValidMove || this.isValidAttack;
  }

  constructor(private moveService: MoveService) {
    moveService.dragAnnounced$.subscribe(
      moveList => {
        this.showValidMoves(moveList);
      }
    );
    moveService.dropAnnounced$.subscribe(
      hi => {
        this.removeValidMoveClass();
      }
    );

    if (this.character == null) {
      this.character = JSON.parse(JSON.stringify(this.emptyCharacter));
    }
  }

  ngOnInit() {
  }

  move(event, cell) {
    const newCharacter = event.dragData;

    // using id because object comparrison is being confusing.
    // TODO: fix after database added.
    if (this.character !== newCharacter) {
      if (this.character.id !== this.emptyCharacter.id) {
        debugger;
        if (this.character.attack > newCharacter.attack) {
          this.swapWithLocalCharacter(newCharacter);
        }
      } else if (cell.terrain !== 1 && cell.isValidMove) {
        this.swapWithLocalCharacter(newCharacter);
      }
    }
  }

  swapWithLocalCharacter(foreignCharacter) {
    this.character = JSON.parse(JSON.stringify(foreignCharacter));
    foreignCharacter.img = 'empty.png';
    foreignCharacter = JSON.parse(JSON.stringify(this.emptyCharacter));
    this.character.location = this.location;
  }

  private showValidMoves(moveList: number[]) {
    if (moveList[this.location] === Actions.move) {
      this.isValidMove = true;
    } else if (moveList[this.location] === Actions.attack) {
      this.isValidAttack = true;
    }
  }

  private removeValidMoveClass()  {
    this.isValidMove = false;
    this.isValidAttack = false;
  }
}
