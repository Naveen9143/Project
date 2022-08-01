import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
searchname:string

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
Logout(){
  this.route.navigateByUrl("")
}

  addProduct(){
    this.route.navigateByUrl("addproduct")
  }
  search(){
    console.log(this.searchname)
    this.route.navigateByUrl("search/"+this.searchname)

  }
  

}
