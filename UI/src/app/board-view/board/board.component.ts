import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Character, mockCharacters } from '../../models/character';
import { BoardService } from '../board.service';

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
    private router: Router,
    private boardService: BoardService
  ) { }

  async ngOnInit() {
    // const randomBoard = Math.floor(Math.random() * BOARDS.length);
    this.CurrentBoard = await this.boardService.GetBoardById(0);
    this.characterTeam1.forEach( (value) => {
      value.team = 1;
    });
    this.characterTeam2.forEach( (value) => {
      value.team = 2;
    });
  }
}
