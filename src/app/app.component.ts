import { UserdataService } from './userdata.service';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'flipkart';
  active: any;
  constructor(private userdata:UserdataService) {
    // this.router.navigate(["/login"])
   }

  ngOnInit(): void {
  
   this.userdata.rj.subscribe(data=>this.active=this.userdata.active)
  }
}
