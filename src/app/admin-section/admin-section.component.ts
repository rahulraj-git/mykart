import { UserdataService } from './../userdata.service';
import { Component, OnInit } from '@angular/core';
import { allUers } from '../services/classes/allUsers';
import { user } from '../services/classes/user';
import { freeApiService } from '../services/freeapi.service';

@Component({
  selector: 'app-admin-section',
  templateUrl: './admin-section.component.html',
  styleUrls: ['./admin-section.component.scss']
})
export class AdminSectionComponent implements OnInit {
  lstuserAssesment:allUers[] | undefined;

  constructor(private _freeApiService:freeApiService) { }
  lstuser:allUers []| undefined
  
  ngOnInit(): void {
    this._freeApiService.adminAcess()
    .subscribe(

      data=>
      {
this.lstuser=data;
      }
    )

    this._freeApiService.adminAcess1()
    .subscribe(

      data=>
      {
this.lstuserAssesment=data;
      }
    )
  }

  
  
   }
 
  