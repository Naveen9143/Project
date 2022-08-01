import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paymentprocess',
  templateUrl: './paymentprocess.component.html',
  styleUrls: ['./paymentprocess.component.css']
})
export class PaymentprocessComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  shopmore(){
    this.route.navigateByUrl("user")
  }
  LogOut(){
    this.route.navigateByUrl("")
  }

}
