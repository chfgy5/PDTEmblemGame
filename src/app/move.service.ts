import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoveService {
  readonly moveKey = 'move';
  readonly attackKey = 'attack';

  private dragAnnouncedSource = new Subject<{ [i: number]: string }>();
  private dropAnnouncedSource = new Subject();

  dragAnnounced$ = this.dragAnnouncedSource.asObservable();
  dropAnnounced$ = this.dropAnnouncedSource.asObservable();

  sendLocation(location: number) {
    const moveList: { [i: number]: string } = {};

    if (location === -1) {
      for (let i = 0; i < 6; i++) {
        moveList[i] = this.moveKey;
      }
    } else {
        moveList[location] = this.moveKey;
        moveList[location - 1] = this.moveKey;
        moveList[location + 1] = this.moveKey;
        moveList[location - 6] = this.moveKey;
        moveList[location + 6] = this.moveKey;

        moveList[location - 1 - 1] = this.attackKey;
        moveList[location + 1 + 1] = this.attackKey;
        moveList[location - 6 * 2] = this.attackKey;
        moveList[location + 6 * 2] = this.attackKey;
    }

    this.dragAnnouncedSource.next(moveList);
  }

  removeValidMoves() {
    this.dropAnnouncedSource.next();
  }
}
