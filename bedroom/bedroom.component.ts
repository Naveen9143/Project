import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bedroom } from '../classes/bedroom';
import { BedroomService } from '../services/bedroom.service';

@Component({
  selector: 'app-bedroom',
  templateUrl: './bedroom.component.html',
  styleUrls: ['./bedroom.component.css']
})
export class BedroomComponent implements OnInit {

bedroom:Bedroom[];

  constructor(private proservice:BedroomService,
              private activeRoute:ActivatedRoute,
              private route:Router) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(()=>{this.listProducts()});
    
  }

updateProduct(id:number){
  this.route.navigateByUrl("editproduct/"+id)
}
deleteProduct(id:number){
  if(confirm("Do you want to delete product with id "+id+"?")){
    this.proservice.deleteProductById(id).subscribe(()=>{
      this.listProducts
    })
  }
}

listProducts(){
  if(this.activeRoute.snapshot.paramMap.has("cid")){ //display based on categories
    const categoryId=+this.activeRoute.snapshot.paramMap.get("cid");
    this.proservice.getCategoryBasedProducts(categoryId).subscribe(data=>{
      this.bedroom=data
    })
  }
  else if(this.activeRoute.snapshot.paramMap.has("name")){ //display by sku
        const sku:string=this.activeRoute.snapshot.paramMap.get("name");
        this.proservice.searchByName(sku).subscribe(data=>{
          this.bedroom=data
        })
  
      }    
      else{         //display All Products
      this.proservice.getAllProducts().subscribe(data=>{
        console.log(data);
        this.bedroom=data
      
      })
    };
}

}
