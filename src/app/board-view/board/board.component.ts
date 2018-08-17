import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { BOARDS } from '../../models/boards';
import { Character, mockCharacters } from '../../models/character';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  characterTeam1: Character[] = [
    JSON.parse(JSON.stringify(mockCharacters[Math.floor(Math.random() * (mockCharacters.length - 1)) + 1])),
    JSON.parse(JSON.stringify(mockCharacters[Math.floor(Math.random() * (mockCharacters.length - 1)) + 1])),
    JSON.parse(JSON.stringify(mockCharacters[Math.floor(Math.random() * (mockCharacters.length - 1)) + 1]))
  ];
  characterTeam2: Character[] = [
    JSON.parse(JSON.stringify(mockCharacters[Math.floor(Math.random() * (mockCharacters.length - 1)) + 1])),
    JSON.parse(JSON.stringify(mockCharacters[Math.floor(Math.random() * (mockCharacters.length - 1)) + 1])),
    JSON.parse(JSON.stringify(mockCharacters[Math.floor(Math.random() * (mockCharacters.length - 1)) + 1]))
  ];
  CurrentBoard: number[];
  startingTeam: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    const randomBoard = Math.floor(Math.random() * BOARDS.length);
    this.CurrentBoard = BOARDS[0];
    this.characterTeam1.forEach( (value) => {
      value.team = 1;
    });
    this.characterTeam2.forEach( (value) => {
      value.team = 2;
    });
  }

  ngOnInit() {
  }
}
