import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { insurance } from './insurance';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http:HttpClient) { }

  // url: string = "http://localhost:3000/users"
  url:string="http://localhost:3000/insurance"

  getInsurance()
  {
    return this.http.get<insurance[]>(this.url)
  }
  insertInsurance(insuraceobj:insurance):Observable<any>
  {
    const headerss={'content-type':'application/json'};
    const bodyy =JSON.stringify(insuraceobj);
    console.log(bodyy);
      return this.http.post(this.url,bodyy,{'headers':headerss});
  }
  deleteInsurance(policyNo:number):Observable<any>
  {
    let deleteURLs=this.url +"/"+policyNo;
    console.log("URL for delete "+deleteURLs);
    return this.http.delete(deleteURLs);
  }
  
  
}
