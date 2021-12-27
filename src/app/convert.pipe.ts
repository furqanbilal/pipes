import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value: number, conversion:string): any {
    if(!value){
      return '';
    }
    switch(conversion){
      case 'km':
      return value * 1.60934 ;

      case 'm':
      return value * 1.60934 * 1000;

      case 'cm':
      return value * 1.60934 * 1000 * 100;

      default:
        throw new Error("This format is not supported")
    }
  }
}
