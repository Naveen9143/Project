import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bedroom } from '../classes/bedroom';
import { BedroomService } from '../services/bedroom.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  newproduct :Bedroom=new Bedroom(0,"","",0,0,"",0);
  constructor(private proService:BedroomService,
              private route:Router,
              private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(()=>{this.getProductById()})
  }

getProductById(){
  const id:number= +this.activatedRoute.snapshot.paramMap.get("id");
  this.proService.getProductBYId(id).subscribe(data=>{
    this.newproduct=data
  })
}

  addProduct(){
    console.log(this.newproduct)
    this.proService.save(this.newproduct).subscribe(()=>{
      this.route.navigateByUrl("products")
    })
  }



}
