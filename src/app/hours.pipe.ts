import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hours'
 
})
export class HoursPipe implements PipeTransform {
 newHour:string='';
  transform(value:string):string{
   let nhour:number=+value;
   if(nhour>60){
     this.newHour=""+Math.floor(nhour/60)+"שעות"+nhour%60+"דקות";
   }
   else{
     this.newHour=""+nhour+"דקות";
   }
   if(nhour<60){
    this.newHour=nhour+" דקות ";
  }
  if(nhour==60){
     this.newHour=" שעה  ";
  }
    return this.newHour;
  }
 
}
