import { UserdataService } from './../userdata.service';
import { ItemListService } from './../item-list.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
// searchString:any;
  constructor(public ItemListService:ItemListService,public UserdataService:UserdataService) { }
cartvalue:any;

first_name: any;
last_name: any;
active: any;
role:any;
token:any;

  ngOnInit(): void {

    const sub=this.ItemListService.obs.subscribe(s=>{
    this.cartvalue=this.ItemListService.cartvalue;

   
  

  })
  const sub1=this.UserdataService.rj.subscribe(s=>{
    

   this.first_name=this.UserdataService.first_name;
   this.last_name=this.UserdataService.last_name;

  })
 
  }


  fun(searchString:any){
    // alert(searchString);
    // this.searchString=this.ItemListService.searchString;
    this.ItemListService.fun(searchString);
    
  }


  
}
