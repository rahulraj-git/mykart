import { UserdataService } from './../userdata.service';
import { Component, OnInit } from '@angular/core';
import { Comments } from '../services/classes/comments';
import { freeApiService } from '../services/freeapi.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  first_name: any;
  last_name: any;
  constructor(private _freeApiService:freeApiService,public UserdataService:UserdataService) { }
  lstcomments:Comments []| undefined;
  
  ngOnInit(): void {

    this._freeApiService.getcomments()
    .subscribe(

      data=>
      {
this.lstcomments=data;
      }
    )
  }


  sub1=this.UserdataService.rj.subscribe(s=>{
    

    this.first_name=this.UserdataService.first_name;
    this.last_name=this.UserdataService.last_name;
 
   })
}
