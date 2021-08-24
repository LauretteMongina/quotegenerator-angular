import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datePipe'
})
export class DatePipePipe implements PipeTransform {

  transform(value: any): number {
    let today:Date = new Date();
    let todayWithNoTime:any = new Date(today.getFullYear(),today.getMonth(),today.getDate())
    var dateDiff =Math.abs(todayWithNoTime - value)
    const secondsInADay= 86400;

    var dateDiffSec=dateDiff*0.001; 
    var dateCounting = dateDiffSec/secondsInADay;

    if (dateCounting >= 1 && todayWithNoTime > value){
        return dateCounting;
    }else{
        return 0;
    }
  }
}
