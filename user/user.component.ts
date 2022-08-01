import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bedroom } from '../classes/bedroom';
import { BedroomService } from '../services/bedroom.service';
import { CartService } from '../services/cart.service';
import { Bedroomcategory } from '../classes/bedroomcategory';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  bedroom:Bedroom[];
  searchname:string
  constructor(private activeRoute:ActivatedRoute,
            private proservice:BedroomService,
            private route:Router,private cservice:CartService,private service:BedroomService) { }


            category:Bedroomcategory[]

  ngOnInit(): void {
    if(this.activeRoute.snapshot.paramMap.has("cart")){
    this.add
    }
    else{
      this.activeRoute.paramMap.subscribe(()=>{this.listProducts()});
    }
  }
search(){
  console.log(this.searchname)
  this.route.navigateByUrl("search/"+this.searchname)

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
        this.bedroom=data;

        this.bedroom.forEach((a:any)=>{
          Object.assign(a,{quantity:1,total:a.price});
        })

      })
    };

  }

add(e:any){

this.cservice.addtoCart(e)


}
buy(e:any){
this.cservice.addtoCart(e)
this.route.navigateByUrl("user/cart")
}

}
