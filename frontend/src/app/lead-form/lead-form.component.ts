// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-lead-form',
//   templateUrl: './lead-form.component.html',
//   styleUrls: ['./lead-form.component.css']
// })
// export class LeadFormComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lead-form',
  templateUrl: './lead-form.component.html',
  styleUrls: ['./lead-form.component.css']
})
export class LeadFormComponent implements OnInit {
  public lead_name:string;
  public city:string;
  public lead_phone:string;
  public lead_address:string;
  public lead_type:string;
  public author_phone:string;
  public is_verified:string;
  public lead_description:string;
  public created:string;

  constructor() {
    this.lead_name="";
    this.city="";
    this.lead_phone="";
    this.lead_address="";
    this.lead_type="";
    this.author_phone="";
    this.is_verified="";
    this.lead_description="";
    this.created="";
   }

   
  ngOnInit(): void {
  }
  
submit(){


}
}