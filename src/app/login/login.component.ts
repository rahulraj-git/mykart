import { UserdataService } from './../userdata.service';
import { Component, OnInit } from '@angular/core';
import { freeApiService } from '../services/freeapi.service';
import { FormBuilder } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 

  constructor(public httpService:freeApiService, private formBuilder: FormBuilder,private router:Router,private userdataservice:UserdataService) {
   

   }

   userForm = this.formBuilder.group({
    email: '',
    password: ''
  });


  ngOnInit(): void {

  
  }

  onSubmit(){try{

  
    // alert('Your order has been submitted'+ this.userForm.value);

    let userInfo={email:this.userForm.value.email,password:this.userForm.value.password}


    // console.log(this.userForm);
    this.userForm.reset();
this.httpService.loginUser(userInfo).subscribe(data=>{
  this.userdataservice.setUser(data);

  this.router.navigate(["home"]);

console.log(data);
  

alert("succesfull");
// alert(data);
},err=>{alert ("this is not allowed")});
}
catch(err){
  alert("unable to log in")
  
}
}


}
