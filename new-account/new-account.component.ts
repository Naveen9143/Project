import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from '../classes/admin';
import { BedroomService } from '../services/bedroom.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {
newuser:Admin=new Admin(0,"","","",0,2);
  constructor(private route:Router,private service:BedroomService,
              private activateroute:ActivatedRoute) { }

  ngOnInit(): void {
  }
  redirect(){
    console.log(this.newuser)
      this.service.save1(this.newuser).subscribe((response)=>{
        alert("Registration SuccessFull!!!")
      this.route.navigateByUrl("")
    },
    (error)=>{
      alert("Already Have a Account!.Please SignUp")
      this.route.navigateByUrl("")
    }
    )
    
  }

  

}
