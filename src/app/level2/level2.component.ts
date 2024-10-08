import { Component } from '@angular/core';

@Component({
  selector: 'app-level2',
  templateUrl: './level2.component.html',
  styleUrls: ['./level2.component.scss']
})
export class Level2Component {
  private currentPlayerIx!: number;
  private currentWinnerIx!: number;
  private playerNames: string[];
  public boardContent! : number [][];

  constructor() {
    this.playerNames = ['', 'X', 'O'];
    this.onRestart();
  }

  public getPlayerName(col: number, row: number): string {
    return this.playerNames[this.boardContent[row][col]];
  }

  public getStyle(col: number, row: number): string {
    if (this.boardContent[row][col] !== 0) {
    return `occupied-${this.getPlayerName(col, row)}`;
    }

    return '';
  }

  public set(col: number, row: number): void {
    if (this.currentWinnerIx === 0 && this.boardContent[row][col] === 0) {
      this.boardContent[row][col] = this.currentPlayerIx;
      this.currentPlayerIx = this.currentPlayerIx === 1 ? 2 : 1;
     /* if (this.currentPlayerIx === 1) {
        this.currentPlayerIx = 2;
      } else {
        this.currentPlayerIx = 1
      };*/
      }

      this.currentWinnerIx = this.getWinnerIndex();
    }

    public get winnerIndex(): number {
      return this.currentWinnerIx;
    }

    public getWinnerName(): string {
      return this.playerNames[this.currentWinnerIx];
    }

    public onRestart(): void {
      this.boardContent = [
        [ 0, 0, 0],
        [ 0, 0, 0],
        [ 0, 0, 0],
      ];
      this.currentPlayerIx = 1;
      this.currentWinnerIx = 0;
    }

    /**
     * Returns the winner index (1 or 2) or if no winner.
     * @returns Player (1 or 2) who has won, or 0 if there is no winner yet
     */

    private getWinnerIndex(): number {
      const board = this.boardContent;

      // Check rows
      for (let row = 0; row < 3; row++) {
        const first = this.boardContent[row][0];
        if (
          first !== 0 &&
          this.boardContent[row][1] === first &&
          this.boardContent[row][2] === first
        ) {
          return first;
        }
      }

      //Check Colmns
      for (let col = 0; col < 3; col++) {
        const first = this.boardContent[0][col];
        if (
          first !== 0 &&
          this.boardContent[1][col] === first &&
          this.boardContent[2][col] === first
        ) {
          return first;
        }
      }

      // Check diagonals
      const first = this.boardContent[2][1];
      if (first !== 0) {
        if (
          this.boardContent[0][0] === first &&
          this.boardContent[2][2] === first
        ) {
          return first;
        }
        if (
          this.boardContent[2][0] === first &&
          this.boardContent[0][2] === first
        ) {
          return first;
        }
      }

      return 0;
    }
  }

