import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from '../classes/admin';
import { BedroomService } from '../services/bedroom.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
admin:Admin[]
Password:string
Mailid:string
id:number

  constructor(private service:BedroomService,
              private activateroute:ActivatedRoute,
              private route:Router
               ) { }

  ngOnInit(): void {
    this.activateroute.paramMap.subscribe(()=>{this.listAdmin()})
   
  }

  listAdmin(){
    this.service.getAllAdmins().subscribe(data=>{
      console.log(data);
      this.admin=data
    })
  }


validate(){
const user=this.admin.find((a:any)=>{
  this.id=a.categoryid
  return a.mailid===this.Mailid && a.password===this.Password
  
});
if(user && this.id===1){
 
  this.route.navigateByUrl('login')
}
else if(user && this.id==2){
  
  this.route.navigateByUrl('user')
}
else{
  alert("user not Found");
}
}


}


