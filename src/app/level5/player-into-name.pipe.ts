import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'playerName'
})
export class PlayerIntoNamePipe implements PipeTransform {
  private playerName = ['', 'X', 'O'];

  transform(player: number, ...args: unknown[]): string {
    if (player < 0 || player > 2) {
      throw new Error('Invalid player');
    }
    
      return this.playerName[player];
  }

}
