import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bedroomcategory } from '../classes/bedroomcategory';
import { BedroomService } from '../services/bedroom.service';

@Component({
  selector: 'app-bedroomcategory',
  templateUrl: './bedroomcategory.component.html',
  styleUrls: ['./bedroomcategory.component.css']
})
export class BedroomcategoryComponent implements OnInit {
  category:Bedroomcategory[]
  constructor(private service:BedroomService,
              private route:Router) { }

  ngOnInit(): void {
    this.service.getCategoryList().subscribe(data=>{
      console.log(data)
      this.category=data
    })
  }
  return(){
    this.route.navigateByUrl("login")
  }
 
}
