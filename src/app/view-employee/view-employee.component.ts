import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {
  searchdata = new FormGroup({
    empId:new FormControl('')
  })
  search: any;
  searchemp: any;
  constructor(private data : DataService , private router : Router) { }

  ngOnInit() {
  }

  SearchFunction(){
    console.log(this.searchdata.value);
  }


  a = false;
  b = false;

  SearchEmployeeFun(){
    this.data.SearchEmployee(this.searchdata).subscribe((data: {})=>{
      console.log(data);
      this.search = data;
      this.searchemp = this.search.message;

      //condition
      if(this.searchemp=="No User Found!"){
        this.a = false;
        this.b = true;
      }else{
        this.a = true;
        this.b = false;
      }
    })
  }

}
