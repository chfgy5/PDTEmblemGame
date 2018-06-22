import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {
  terrain: number;

  constructor() {  }

  ngOnInit() {
  }

  onDropLog(event, item) {
    console.dir(item);
    console.dir(event);
  }
}
