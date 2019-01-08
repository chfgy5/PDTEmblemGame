import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Actions } from '../Models/actions';
import { Character } from '../Models/character';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class MoveService {
  public serviceUrl = 'Movement';

  constructor(public api: ApiService) { }

  private dragAnnouncedSource = new Subject<number[]>();
  private dropAnnouncedSource = new Subject();

  dragAnnounced$ = this.dragAnnouncedSource.asObservable();
  dropAnnounced$ = this.dropAnnouncedSource.asObservable();

  async sendValidMoves(character: Character) {
    let moveList: number[] = [];
    await this.api.get(`${this.serviceUrl}/${character}`)
        .toPromise()
        .then(response => {
          moveList = response as number[];
        });

    this.dragAnnouncedSource.next(moveList);
  }

  removeValidMoves() {
    this.dropAnnouncedSource.next();
  }
}
