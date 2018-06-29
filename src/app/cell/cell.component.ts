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

  moveToCell(event, cell) {
    if (cell.terrain !== 1 && this.characterImg !== event.dragData.characterImg) {
      this.characterImg = event.dragData.characterImg;
      event.dragData.characterImg = 'empty.png';
    }
  }
}
