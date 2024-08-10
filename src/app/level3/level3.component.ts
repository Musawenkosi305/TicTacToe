import { Component } from '@angular/core';
import { Level2Component } from '../level2/level2.component';

/**
 * Represents a board cell.
 */
export interface BoardCell {
  /**
   * Player (X or O) occupying the cell, empty string if the cell is empty.
   */
  playerName: string;

  /**
   * SCSS class of the player occupying the cell, empty string if the cell is empty
   */
  class: string;
}

@Component({
  selector: 'app-level3',
  templateUrl: './level3.component.html',
  styleUrls: ['./level3.component.scss']
})
export class Level3Component extends Level2Component {

  constructor() {
    
    super(); 
  }

  /**
   * Get a two-dimensional array representing the board's content.
   */
  public getCells(): BoardCell[][] {
    const result: BoardCell[][] = [];
    for (let row = 0; row < 3; row++) {
      result.push([]);
      for (let col = 0; col < 3; col++) {
        result[row][col] = {
          playerName: this.getPlayerName(col, row),
          class: this.getStyle(col, row),
        };
      }
    }

    return result;

    
  } 

}
