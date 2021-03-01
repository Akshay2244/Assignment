import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employees } from './user';
@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  url: any = "http://localhost:3000/Employees";

  // getEmployee()
  // {
  //   return this.http.get<Employees[]>(this.url);
  // }

  getUser() {
    return this.http.get("http://localhost:3000/Employees");
  }

  createUser(Employees) {
    return this.http.post("http://localhost:3000/Employees", Employees);
  }

  updateEmployees(Employees) {
    return this.http.put("http://localhost:3000/Employees/" + Employees.id, Employees);
  }



}
