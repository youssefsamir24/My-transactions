import { Pipe, PipeTransform } from '@angular/core';
import { Data } from './data';

@Pipe({
  name: 'amdinsearch'
})
export class AmdinsearchPipe implements PipeTransform {

  transform(data:Data[],searchItem:string): Data[] {
    return  data.filter((data)=>data.title.toLocaleLowerCase().includes(searchItem.toLocaleLowerCase()));;
  }

}
