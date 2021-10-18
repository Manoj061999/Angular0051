import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-show-all-employee',
  templateUrl: './show-all-employee.component.html',
  styleUrls: ['./show-all-employee.component.css']
})
export class ShowAllEmployeeComponent implements OnInit {
  emp: any;
  showemp: any;

  constructor(private data : DataService) { }

  ngOnInit() {
    this.fetchEmployee()
  }

  a = false;
  b = false;

  fetchEmployee(){
    return this.data.GetAllEmployee().subscribe((items: any)=>{
      console.log(items);
      this.emp = items;
      this.showemp = this.emp.message;

      //condition
      if(this.showemp=="No User Found!"){
        this.a = false;
        this.b = true;
      }else{
        this.a = true;
        this.b = false;
      }
    })
  }

}
