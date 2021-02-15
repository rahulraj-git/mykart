
// import { user } from './services/classes/user';
import {Injectable}from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { user } from './classes/user';

@Injectable()


export class freeApiService
{
constructor(private httpclient:HttpClient){}

xtoken:any;

ob1={ email:"user@deepersignals.com", password:"password" }


    getcomments(): Observable<any>{

        let para =  new HttpHeaders().set( 'X-Token', this.xtoken);
       return this.httpclient.get('https://ds-test-api.herokuapp.com/api/userassessments',{headers:para});
    }

    loginUser(userInfo:any){
        let para1 =  new HttpHeaders().set( 'X-Token','VXNlclVzZXI=');
        let test= this.httpclient.post<user>('https://ds-test-api.herokuapp.com/api/login',userInfo,{headers:para1});
      //   console.log(test);
        return test;
     }

     adminAcess1(): Observable<any>{

        let para =  new HttpHeaders().set( 'X-Token',this.xtoken);
       return this.httpclient.get('https://ds-test-api.herokuapp.com/api/userassessments',{headers:para});
    }

    adminAcess(): Observable<any>{

      let para =  new HttpHeaders().set( 'X-Token',this.xtoken);
     return this.httpclient.get('https://ds-test-api.herokuapp.com/api/users',{headers:para});
  }
   
     
    }

    