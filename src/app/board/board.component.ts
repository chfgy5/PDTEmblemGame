import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { BOARDS } from '../boards';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  CurrentBoard: number[];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.CurrentBoard = BOARDS[0];
  }

  ngOnInit() {
  }

  onDropLog(event) {
    // if (event === 0 || event === 2) {
      event.nativeEvent.toElement.innerHTML = `<img _ngcontent-c2 src="../../assets/images/person.png"
        alt="Person.png" [draggable] [dragData]="this">`;
    // }
    console.dir(event);
  }

}
