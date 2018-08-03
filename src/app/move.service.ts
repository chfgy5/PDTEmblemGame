import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoveService {

  private dragAnnouncedSource = new Subject<number>();
  private dropAnnouncedSource = new Subject();

  dragAnnounced$ = this.dragAnnouncedSource.asObservable();
  dropAnnounced$ = this.dropAnnouncedSource.asObservable();

  sendLocation(location: number) {
    this.dragAnnouncedSource.next(location);
  }

  removeValidMoves() {
    this.dropAnnouncedSource.next();
  }
}
