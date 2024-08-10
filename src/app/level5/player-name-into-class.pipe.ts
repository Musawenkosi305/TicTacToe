import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'playerClass'
})
export class PlayerNameIntoClassPipe implements PipeTransform {

  transform(player: string, ...args: unknown[]): string {
    return `occupied-${player}`;
  }

}

