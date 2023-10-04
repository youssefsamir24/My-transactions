import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '../transactions.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private _TransactionsService:TransactionsService){
    
  }
  data:any [] =[] ;
  searchItem:string = ''
ngOnInit(): void {
  this._TransactionsService.getData().subscribe({
    next:(response)=>{
      this.data = response
      console.log(response);
    },
    error:(err)=>{
      console.log(err);
      
    }
  })
}

}
