import { Injectable } from '@angular/core';
// import 'rxjs/add/operator/toPromise';

import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  private board: number[];
  public serviceUrl = 'Board';

  constructor(public api: ApiService) { }

  public async GetBoardById(id: number): Promise<number[]> {
    if (this.board) {
      return Promise.resolve(this.board);
    } else {
      return await this.api.get(`${this.serviceUrl}/${id}`)
        .toPromise()
        .then(response => {
          this.board = response as number[];
          return this.board;
        });
    }
  }
}
