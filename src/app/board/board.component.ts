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
  characterTeam1: Character[] = [
    { id: 3, img: 'mighty.png', location: -1, team: 1, movement: 2 },
    { id: 1, img: 'person.png', location: -1, team: 1, movement: 1 }
  ];
  characterTeam2: Character[] = [
    { id: 2, img: 'MrBravo.webp', location: -1, team: 2, movement: 1 }
  ];
  CurrentBoard: number[];
  startingTeam: number;

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
