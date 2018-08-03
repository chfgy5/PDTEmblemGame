import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Actions } from './actions';
import { Character } from './character';

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
      for (let i = 0; i < 6; i++) {
        moveList[i] = Actions.move;
      }
    } else {
      for (let i = 0; i <= character.movement; i++) {
        moveList[character.location + i] = Actions.move;
        moveList[character.location - i] = Actions.move;
        moveList[character.location + 6 * i] = Actions.move;
        moveList[character.location - 6 * i] = Actions.move;

        moveList[character.location + i + 1] = Actions.attack;
        moveList[character.location - i - 1] = Actions.attack;
        moveList[character.location + 6 * i + 1] = Actions.attack;
        moveList[character.location - 6 * i - 1] = Actions.attack;
        for (let j = 1; j <= character.movement - i; j++) {
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
    }

    this.dragAnnouncedSource.next(moveList);
  }

  removeValidMoves() {
    this.dropAnnouncedSource.next();
  }
}
