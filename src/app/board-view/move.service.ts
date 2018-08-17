import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Actions } from '../Models/actions';
import { Character } from '../Models/character';

@Injectable({
  providedIn: 'root'
})
export class MoveService {

  private dragAnnouncedSource = new Subject<number[]>();
  private dropAnnouncedSource = new Subject();

  dragAnnounced$ = this.dragAnnouncedSource.asObservable();
  dropAnnounced$ = this.dropAnnouncedSource.asObservable();

  sendValidMoves(character: Character) {
    const moveList: number[] = [];

    if (character.location === -1) {
      if (character.team === 1) {
        for (let i = 0; i < 6; i++) {
          moveList[i] = Actions.move;
        }
      } else if (character.team === 2) {
        for (let i = 0; i < 6; i++) {
          moveList[29 - i] = Actions.move;
        }
      }
    } else {
      let i;
      for (i = 0; i <= character.movement; i++) {
        moveList[character.location + i] = Actions.move;
        moveList[character.location - i] = Actions.move;
        moveList[character.location + 6 * i] = Actions.move;
        moveList[character.location - 6 * i] = Actions.move;

        moveList[character.location + i + 1] = Actions.attack;
        moveList[character.location - i - 1] = Actions.attack;
        moveList[character.location + 6 * i + 1] = Actions.attack;
        moveList[character.location - 6 * i - 1] = Actions.attack;

        for (let j = 0; j <= character.movement - i; j++) {
          moveList[character.location + 6 * i + j] = Actions.move;
          moveList[character.location + 6 * i - j] = Actions.move;
          moveList[character.location - 6 * i + j] = Actions.move;
          moveList[character.location - 6 * i - j] = Actions.move;

          moveList[character.location + 6 * i + j + 1] = Actions.attack;
          moveList[character.location + 6 * i - j - 1] = Actions.attack;
          moveList[character.location - 6 * i + j + 1] = Actions.attack;
          moveList[character.location - 6 * i - j - 1] = Actions.attack;
        }
      }

      moveList[character.location + 6 * i] = Actions.attack;
      moveList[character.location - 6 * i] = Actions.attack;
    }

    this.dragAnnouncedSource.next(moveList);
  }

  removeValidMoves() {
    this.dropAnnouncedSource.next();
  }
}
