import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
 

@Injectable()
export class ApiService{

   constructor(private http: HttpClient){}

  postQuestion(question: any){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.post('https://localhost:44364/api/Questions', question, {headers}).subscribe( res=>{
        console.log(res);
    })
  }
}