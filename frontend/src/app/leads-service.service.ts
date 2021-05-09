import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LeadsServiceService {
  uri = 'http://localhost:4200/';
  constructor(private http: HttpClient) { }
  getLeads() {
    return this.http.get(`${this.uri}`, {responseType: 'text'});
  }

  /*getIssueById(id) {
    return this.http.get(`${this.uri}/issues/${id}`);
  }

  addIssue(title, responsible, description, severity) {
    const issue = {
      title: title,
      responsible: responsible,
      description: description,
      severity: severity
    };
    return this.http.post(`${this.uri}/issues/add`, issue);
  }*/
}
