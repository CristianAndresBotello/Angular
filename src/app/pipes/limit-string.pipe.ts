import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitString'
})
export class LimitStringPipe implements PipeTransform {

  transform(value: string, limit: number = 500, adicion: string = '...'): string {
  
      if(value.length > limit){
        return value.substring(0,limit) + adicion;
      }else{
        return value;
      }
  }  

}
