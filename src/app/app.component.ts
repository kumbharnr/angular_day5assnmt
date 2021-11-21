import { Component } from '@angular/core';
import { RestService } from './rest.service';
import { insurance } from './insurance';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day5assnmt';

  constructor(private restService:RestService){ }

  columns2=["Policy No","Policy Holder Name","Policy Amount","Amount For EMI","Nominee Name","Action"];

  userinsurance:insurance[]=[];

  ngOnInit()
  {
    this.readDataa();
  }
  readDataa()
  {
    this.restService.getInsurance().subscribe
    (
      (dataa)=>
      {
        this.userinsurance=dataa;
      },
      (errors)=> console.log(errors)
    )
  }
  insertInsuranceInJson()
  {
    let insuranceobj=new insurance(10222,"NRK",200000,10000,"bjk");
    this.restService.insertInsurance(insuranceobj).subscribe(
      dataa => {console.log("Received data is : "+dataa);
      this.readDataa();  
    }
    )
  }
  recordIdDeleteinJSONServe=0;
  recordToDeleteinsurance()
  {
    this.restService.deleteInsurance(this.recordIdDeleteinJSONServe).subscribe(
      dataa=>{console.log("Record deleted :"+dataa);
      this.readDataa();  
    }
    )
  }

}
