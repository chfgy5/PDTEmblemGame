import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { BoardComponent } from './board/board.component';
import { NgDragDropModule } from 'ng-drag-drop';
import { CellComponent } from './cell/cell.component';
import { CharacterComponent } from './character/character.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    CellComponent,
    CharacterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgDragDropModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
