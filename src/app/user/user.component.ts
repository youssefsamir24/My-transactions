import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '../transactions.service';
import { ChartsComponent } from '../charts/charts.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  constructor(private _TransactionsService:TransactionsService){

  }
   test:ChartsComponent = new ChartsComponent(this._TransactionsService);
  kobry(){
    // console.log(this.adminSearch);
    
    this._TransactionsService.searchKey.next(this.adminSearch);
    this.x = this.test.filterData(this.adminSearch);
  }
  x:any 

  adminData:any []=[];
  adminSearch:string=''
  ngOnInit(): void {
    this._TransactionsService.getData().subscribe({
      next:(response)=>{
        this.adminData = response
        console.log(response);
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }

}
