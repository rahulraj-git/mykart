import { ItemListService } from './../item-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items:any=[];
  total:any;
  i: any;
  name:any=[];
 
  constructor(public ItemListService:ItemListService) { }
  delcart(i:any){
    // console.log(name);
   this.ItemListService.delcart(i);
  }
  
  ngOnInit(): void {
    // debugger;

   
    this.ItemListService.obs.subscribe(e=>{
      this.items=this.ItemListService.items;
      // this.total=200000;
      this.name=this.ItemListService.name;
      // console.log(this.name);
      this.total=this.ItemListService.total;
    })
  }
  }



