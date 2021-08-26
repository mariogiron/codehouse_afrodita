import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vuelta'
})
export class VueltaPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    //quiero darle la vuelta a la cadena de caracteres.
    //comprobar si es cadena, solo tiene que funcionar con cadenas de texto.
    //darle la vuelta y retornar la cadena dada la vuelta.
    if (typeof value === "string") {
      /* let arr = value.split(' ');
      let arrRev = [...arr].reverse();
      let result = arrRev.join(' ');
      return result; */

      return value.split(' ').reverse().join(' ');

    }

    return 'esto no es un string zoquete';
  }


}
