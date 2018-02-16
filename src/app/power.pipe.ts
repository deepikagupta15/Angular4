import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'powerOpn'
})
export class PowerPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return Math.pow(value,args);
  }

}
