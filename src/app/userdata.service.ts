import { freeApiService } from './services/freeapi.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { user } from './services/classes/user';
@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor(private freeapiservice:freeApiService) { }

  first_name: any;
  last_name: any;
  active: any;
  role:any;
  token:any;

  private obj=new BehaviorSubject<any>('');

 rj=this.obj.asObservable()
 setUser(data:user){
  this.first_name=data["first_name"]
  this.last_name=data["last_name"]
  this.role=data["role"]
  this.token=data["token"]
  this.freeapiservice.xtoken=this.token;
  this.active=true
this.obj.next("change");


 }


}
