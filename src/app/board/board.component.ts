import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { BOARDS } from '../boards';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  characterTeam1 = [ 'Person' ];
  characterTeam2 = [ 'Person', 'bob' ];
  CurrentBoard: number[];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.CurrentBoard = BOARDS[0];
  }

  ngOnInit() {
  }

}
