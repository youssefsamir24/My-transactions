import { Pipe, PipeTransform } from '@angular/core';
import { Data } from './data';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(data:Data[],searchItem:string): Data[] {
    // console.log(data.filter((data)=>data.name.includes(searchItem)));
    
    return data.filter((data)=>data.name.toLocaleLowerCase().includes(searchItem.toLocaleLowerCase()));
  }

}
