import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'recortarString'
})
export class RecortarStringPipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {

    let result = value.substr(0, args[0]) + "...";

    return result;
  }

}
