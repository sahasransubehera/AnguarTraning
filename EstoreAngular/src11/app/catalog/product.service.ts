import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

//angular Modules:
//Angular modules we used:
//CommonModule, RouterModule,
//FormsModule
//HttpClientModule



//Angular Directives

//ngModel
//ngStyle
//ngclass
//ngfor
//ngIf ....

//Decorators:
//@input
//@output
//@ngModule
//@Component
//@Directive
//@Pipe
//@Injectable


//Classes
//HttpClient
//get, post, put, delete,patch ,etc.
//Asynchronous programming style to fetch rest api
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  list:any=[];

  constructor(private http:HttpClient) { }

  private  apiUrl:string="http://localhost:8000/flowers";

  getAllProducts():Observable<Product[]>
  {
    //fetch REST API to retrive all flower
   
    return this.http.get<Product[]>(this.apiUrl);
  }
  
  getProductById(id:number):Observable<Product>
  { 
    console.log("selected product id="+ id);
    //string formation

    return this.http.get<Product>(this.apiUrl+"/"+id);

   return this.list.find((p:any)=>{ return p.id ==id});
  }
  
  updateProduct(prod:any):void
  {
    this.http.put(this.apiUrl+"/"+ prod.id, prod);
    // let index=this.list.findIndex((p:any)=> p.id==prod.id);
    // if(index != -1)
    //  this.list[index]=prod;
  }
}
