
import { Component, OnInit } from '@angular/core';
import { ItemListService } from '../item-list.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  sort_max:any="none";
  sort_min:any="none";
  rating:any=0;
  sub: any;
  cartvalue:any;
  name:any=[]
// searchString:any;
addcart(name:any,src:any,price:number){
  // console.log(name);
 this.ItemListService.addcart(name,src,price);
}


 
  constructor(public ItemListService:ItemListService) { }
 items:any=[];
  ngOnInit(): void {
  this.name=this.ItemListService.name;
 const sub=this.ItemListService.obs.subscribe(s=>{
  //  debugger
   if (this.ItemListService.searchString&&this.ItemListService.searchString.length>0) {

    this.items=this.ItemListService.items.filter(item=>item.substring.some(str=>str.toUpperCase().includes(this.ItemListService.searchString.toUpperCase())));
    // this.searchString=this.ItemListService.searchString;
   }
   else
   {
    this.items=this.ItemListService.items;
   }
   
    
  this.sort_max=this.ItemListService.sort_max;
  this.sort_min=this.ItemListService.sort_min;
  this.rating=this.ItemListService.rating;
  console.log(this.rating);
 })

 
  }
ngOnDistroy(){
  this.sub.unsubscribe();
}
}
