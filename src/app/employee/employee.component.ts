import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup , Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employeedata = new FormGroup({
    Empname : new FormControl(''),
    empId : new FormControl('',[Validators.required, Validators.maxLength(5)]),
    email : new FormControl('',[Validators.required, Validators.email]),
    mobile : new FormControl('',[Validators.required]),
    dob : new FormControl(''),
    password : new FormControl('',[Validators.required, Validators.minLength(8), Validators.maxLength(8)]),
    gender : new FormControl(['']),
    address : new FormControl('',[Validators.required])
  });
  emp: any;
  empcreate: any;

  //LOGIN EMPLOYEE
  LoginEmpdata = new FormGroup({
    email : new FormControl(''),
    password : new FormControl('')
  });
  login: any;
  loginemp: any;
  constructor(private data : DataService , private router : Router) { }

  ngOnInit() {
  }
  get getControl(){
    return this.employeedata.controls;
  }

  
  EmployeeFunction(){
    console.log(this.employeedata.value);
  }
  LoginFunction(){
    console.log(this.LoginEmpdata.value);
  }




a = false;
b = false;

//EMPLOYEE
  EmployeeDataFun(){
    this.data.AddEmployee(this.employeedata).subscribe((data: {})=> {
      console.log(data);
      this.emp = data;
      this.empcreate = this.emp.message;

      //condition
      if(this.empcreate=="User Already Exist!"){
        this.a = false;
        this.b = true;
      }else{
        this.a = true;
        this.b = false;
      }
    })
  }

  c = false;
  d = false;

  //LOGIN EMPLOYEE
  LoginEmployeeFun(){
    this.data.LoginEmployee(this.LoginEmpdata).subscribe((data: {})=>{
      console.log(data);
      this.login = data;
      this.loginemp = this.login.message;

      //condition
      if(this.loginemp=="Login Successfully!"){
        this.c = true;
        this.d = false;
        this.router.navigate(['application']);
      }else{
        this.c = false;
        this.d = true;
      }
    })
  }

}
