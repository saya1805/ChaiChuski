import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

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

  senduserinfo(data:any){
   const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
     return this.http.post(this.apiUrl+'login/SignIn',JSON.stringify(data), httpOptions)
  }
  
}
