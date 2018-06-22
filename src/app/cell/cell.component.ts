import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {
  @Input() terrain: number;
  characterImg = 'empty.png';

  constructor() {  }

  ngOnInit() {
  }

  onDropLog(event, cell) {
    console.dir(event);
    console.dir(cell);

    if (cell.terrain !== 1) {
      console.log('move');
      this.characterImg = cell.characterImg;
    }
  }
}
