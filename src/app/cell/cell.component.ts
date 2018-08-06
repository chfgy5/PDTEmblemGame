import { Component, OnInit, Input, HostBinding, ElementRef } from '@angular/core';
import { Subscription, Observable } from 'rxjs';

import { Character } from '../character';
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
  emptyCharacter: Character = { id: 0, img: 'empty.png', location: -1, team: 0, movement: 0 };
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
    this.character.movement = foreignCharacter.movement;
    this.character.team = foreignCharacter.team;

    foreignCharacter.id = this.emptyCharacter.id;
    foreignCharacter.img = this.emptyCharacter.img;
    foreignCharacter.movement = this.emptyCharacter.movement;
    foreignCharacter.team = this.emptyCharacter.team;

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
