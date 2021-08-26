import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    //return value[0].toUpperCase() + value.slice(1);

    let arr = value.split(' ');
    let arrCapitalize = arr.map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })

    return arrCapitalize.join(" ");


  }

}
