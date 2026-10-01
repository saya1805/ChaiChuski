import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private http = inject(HttpClient)
  private apiUrl = "https://localhost:7048/api/"

  getusersall(){
   this.http.get(this.apiUrl + 'login/getUsers').subscribe((res:any) => {
    console.log(res)
  })
  } 

  getMenuall(){
  return this.http.get(this.apiUrl + 'Categ/GetMenu').pipe(
    map((res:any) => res.data)
  );
  } 

  senduserinfo(data:any){
   const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
     return this.http.post(this.apiUrl+'login/SignIn',JSON.stringify(data), httpOptions)
  }

   senduserinfoLogin(data:any){
   const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
     return this.http.post(this.apiUrl+'login/login',JSON.stringify(data), httpOptions)
  }
  
}
