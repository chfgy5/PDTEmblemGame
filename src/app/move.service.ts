import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Actions } from './actions';

@Injectable({
  providedIn: 'root'
})
export class MoveService {

  private dragAnnouncedSource = new Subject<number[]>();
  private dropAnnouncedSource = new Subject();

  dragAnnounced$ = this.dragAnnouncedSource.asObservable();
  dropAnnounced$ = this.dropAnnouncedSource.asObservable();

  sendLocation(location: number) {
    const moveList: number[] = [];

    if (location === -1) {
      for (let i = 0; i < 6; i++) {
        moveList[i] = Actions.move;
      }
    } else {
        moveList[location] = Actions.move;
        moveList[location + 1] = Actions.move;
        moveList[location - 1] = Actions.move;
        moveList[location + 6] = Actions.move;
        moveList[location - 6] = Actions.move;

        moveList[location + 1 + 1] = Actions.attack;
        moveList[location - 1 - 1] = Actions.attack;
        moveList[location + 6 * 2] = Actions.attack;
        moveList[location - 6 * 2] = Actions.attack;
        moveList[location + 6 - 1] = Actions.attack;
        moveList[location + 6 + 1] = Actions.attack;
        moveList[location - 6 - 1] = Actions.attack;
        moveList[location - 6 + 1] = Actions.attack;
    }

    this.dragAnnouncedSource.next(moveList);
  }

  removeValidMoves() {
    this.dropAnnouncedSource.next();
  }
}
