import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { BOARDS } from '../boards';
import { Character } from '../character';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  characterTeam1: Character[] = [ { id: 3, img: 'mighty.png' }, { id: 1, img: 'person.png' } ];
  characterTeam2: Character[] = [ { id: 2, img: 'MrBravo.webp' } ];
  CurrentBoard: number[];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    const randomBoard = Math.floor(Math.random() * BOARDS.length);
    this.CurrentBoard = BOARDS[0];
  }

  ngOnInit() {
  }

}
