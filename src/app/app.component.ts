import { Component } from '@angular/core';
import { RestService } from './rest.service';
import { Employees } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  employees: Employees[] = [];
  name: any;
  allUser: Object;
  isEdit = false;
  isDisplay = false;
  employeeObj = {
    id: "",
    name: "",
    phone: "",
    city: "",
    address_line1: "",
    address_line2: "",
    postal_code: ""
  }

  OnlyNumber(event: any): boolean {
    const charCode = (event.which) ? event.which : event.keycode;

    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      alert("Number Only");
      return false;
    }
    return true;
  }

  display() {
    this.isDisplay = !this.isDisplay;
  }

  Search() {
    if (this.name == "") {
      this.ngOnInit();
    }
    else {
      this.employees = this.employees.filter(res => {
        return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      });
    }
  }

  constructor(private rs: RestService) { }

  ngOnInit(): void {

    this.getLatestUser();
  }



  addEmployees(formobj) {
    console.log(formobj);
    this.rs.createUser(formobj).subscribe((posRes) => {
      alert("Employee Added Successfully");
      this.ngOnInit();
    });

  }
  getLatestUser() {
    this.rs.getUser().subscribe((posRes) => {
      this.allUser = posRes;
    })

  }

  edit(employees) {
    this.isEdit = true;
    this.employeeObj = employees;
  }

  updateEmployees() {
    this.isEdit = !this.isEdit;
    this.rs.updateEmployees(this.employeeObj).subscribe(() => {
      this.getLatestUser();
    })
  }

}
