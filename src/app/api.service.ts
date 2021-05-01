import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  foodurl = 'https://nfoody-api.herokuapp.com/food';
  userurl = 'https://nfoody-api.herokuapp.com/user';

  cardDetail() {
    return this.http.get(this.foodurl);
  }
  addcardDetail(data:any){
    return this.http.post(this.foodurl,data);
  }
  adduserfood(data:any){
    return this.http.post(this.userurl,data);
  }
  userdetails(){
    return this.http.get(this.userurl);
  }
  deleteitem(id:any){
    return this.http.delete(`${this.foodurl}/${id}`);
  }
  deleteuseritem(id:any){
    return this.http.delete(`${this.userurl}/${id}`)
  }
  userid(id:any){
    return this.http.get(`${this.userurl}/${id}`);
  }
  getedititem(id:any){
    return this.http.get(`${this.foodurl}/${id}`);
  }
  updateitem(id:any,data:any){
    
    return this.http.put(`${this.foodurl}/${id}`,data);
  }
}
