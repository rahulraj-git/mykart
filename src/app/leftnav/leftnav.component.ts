import { ItemListService } from './../item-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leftnav',
  templateUrl: './leftnav.component.html',
  styleUrls: ['./leftnav.component.scss']
})
export class LeftnavComponent implements OnInit {
  sort_max:any;
  sort_min:any;
  rating:any;
 
  
  constructor(public ItemListService:ItemListService) { }
 
  ngOnInit(): void {
    this.rating
    this.sort_max=this.ItemListService.sort_max;
    this.sort_min=this.ItemListService.sort_min;
    this.rating=this.ItemListService.rating;
  }
sorted(sort_min:any,sort_max:any,rating:any){
 this.ItemListService.sorted(sort_min,sort_max,rating);

}


}
