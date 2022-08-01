import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Admin } from '../classes/admin';
import { Bedroom } from '../classes/bedroom';
import { Bedroomcategory } from '../classes/bedroomcategory';

@Injectable({
  providedIn: 'root'
})
export class BedroomService {

private url="http://localhost:8080/api/bedroom";
private adminurl="http://localhost:8080/api/admin"
private categoriesurl="http://localhost:8080/api/category"
  constructor(private httpClient:HttpClient) { }
  getAllProducts():Observable<Bedroom[]>{
    return this.httpClient.get<GetResponseBedroom>(this.url).pipe(map(response=>response._embedded.bedRooms))
  }

  getAllAdmins():Observable<Admin[]>{
    return this.httpClient.get<GetAdminDetails>(this.adminurl).pipe(map(response=>response._embedded.admins))
  }

  save(newproduct:Bedroom){
    const httpOptions={
      headers:new HttpHeaders({
        "content-Type" : "application/json",
        "Authorization":"auth-token",
        "Access-Control-Allow-origin":"*"
      })
    }
    return this.httpClient.post<Bedroom>(this.url,newproduct,httpOptions);
  }

  save1(newuser:Admin){
    const httpOptions={
      headers:new HttpHeaders({
        "content-Type" : "application/json",
        "Authorization":"auth-token",
        "Access-Control-Allow-origin":"*"
      })
    }
    return this.httpClient.post<Bedroom>(this.adminurl,newuser,httpOptions);
  }

  getCategoryList():Observable<Bedroomcategory[]>{
    return this.httpClient.get<getCategories>(this.categoriesurl).
    pipe(map(response=>response._embedded.bedroomFCategories));
    
  }

  getCategoryBasedProducts(categoryId:number):Observable<Bedroom[]>{
    const categoryurl="http://localhost:8080/api/bedroom/search/findBycategoryid?id="+categoryId;
    
    return this.httpClient.get<GetResponseBedroom>(categoryurl).
    pipe(map(response=>response._embedded.bedRooms));
    
    }
    searchByName(Name:string):Observable<Bedroom[]>{
      const searchurl="http://localhost:8080/api/bedroom/search/findByName?name="+Name
      return this.httpClient.get<GetResponseBedroom>(searchurl).
      pipe(map(response=>response._embedded.bedRooms))
    }

    getProductBYId(id:number):Observable<Bedroom>{
      const productById=this.url+"/"+id;
  
      return this.httpClient.get<Bedroom>(productById);
    }


  deleteProductById(id:number){
    const httpOptions={
      headers :new HttpHeaders({
        "content-Type" : "application/json",
        "Authorization":"auth-token",
        "Access-Control-Allow-origin":"*"
      })
    }
    return this.httpClient.delete<Bedroom>(this.url+`/${id}`, httpOptions);
  }
 
}
interface GetResponseBedroom{
  _embedded: {
    bedRooms:Bedroom[]
}
}
interface getCategories{
  _embedded : {
    bedroomFCategories: Bedroomcategory[]
}
}
interface GetAdminDetails{
  _embedded : {
    admins :Admin[]
}
}