import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  private currentPlayerIx!: number;
  private currentWinnerIx!: number;
  public boardContent! : number [][];

  constructor() {
    this.restart();
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

    public restart(): void {
      this.boardContent = [
        [ 0, 0, 0],
        [ 0, 0, 0],
        [ 0, 0, 0],
      ];
      this.currentPlayerIx = 1;
      this.currentWinnerIx = 0;
    }
}

