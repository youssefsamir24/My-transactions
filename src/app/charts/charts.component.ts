import { Component, NgModule, OnInit, DoCheck, Input } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { TransactionsService } from '../transactions.service';
import { Subscriber, map } from 'rxjs';
import { inputs } from '@syncfusion/ej2-angular-charts/src/chart/chart.component';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit{
  data:any []=[];
  // getData(){
  //   this._TransactionsService.getData().subscribe({
  //     next:(response)=>{
  //       // console.log(response);
  //       this.data = response
  //     },
  //     error:(err)=>{
  //       console.log(err);
        
  //     }
  //   })

  // }
  @Input() single: any[]=[];
  view: [number,number] = [800, 600];
  colorScheme :any= {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5' ,'#9fd3c7','#385170','#142d4c','#dc2f2f','#93e4c1']
  };
  cardColor: string = '#232837'
  textColor:string = '#5AA454'
  constructor(private _TransactionsService:TransactionsService) {
    Object.assign(this, { single:this.single });
  }

  onSelect(event:any) {
    // this.getData();
    console.log(event);
  }
  searchKey:string=''

  filterData(searchKey:any){
    // console.log('ashta');
    this.single=[]
    this._TransactionsService.getData().pipe(map((response)=>{
      if(response.length){
       response = response.filter((data:any)=>data.name.toLocaleLowerCase().includes(this.searchKey.toLocaleLowerCase() ) );
      }
      console.log(response);
      return response;
    })).subscribe({
      next:(response)=>{
        this.data = response
        console.log(this.data);
        for (let index = 0; index < this.data.length; index++) {
          this.single.push({'name':this.data[index].name ,'value':this.data[index].price})
          
        }
        console.log(this.single);
        
        // console.log(response);
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
    this._TransactionsService.searchKey.subscribe({
      next:(value)=>{
        console.log(value);
        this.searchKey = value;
        
      }
    })
    return this.single
  }
  
  ngOnInit(): void {
    this.filterData(this.searchKey)
    this._TransactionsService.getData().subscribe({
      next:(response)=>{
        this.data = response
        // console.log(this.data);
        // for (let index = 0; index < this.data.length; index++) {
        //   this.single.push({'name':this.data[index].name ,'value':this.data[index].price})
          
        // }
        console.log(this.single);
        
        // console.log(response);
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
    this._TransactionsService.searchKey.subscribe({
      next:(value)=>{
        // console.log(value);
        this.searchKey = value;
        
      }
    })
  }

}
