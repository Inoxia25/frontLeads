import { Component, OnChanges, OnInit, SimpleChanges, } from '@angular/core';
import {LeadsServiceService} from './leads-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnChanges{
  constructor(private leadsService: LeadsServiceService) { }
  leads:any;
  ngOnChanges(changes: SimpleChanges): void {
    console.log("in onChanges");
 this.leadsService.getLeads().subscribe((leads: any) => {
    this.leads = leads;
  });
  console.log(this.leads);
  }
  ngOnInit(): void {
    console.log("Here");
   this.leadsService.getLeads().subscribe((leads: any) => {
    this.leads = leads;
  });
  console.log(this.leads);
  }
  title = 'frontend';
}
