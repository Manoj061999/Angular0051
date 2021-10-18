import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup , Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  updateEmployeedata = new FormGroup({
    empId : new FormControl('',[Validators.required, Validators.minLength(5)]),
    dob : new FormControl(''),
    mobile : new FormControl(''),
    address : new FormControl('')
  });
  update: any;
  updateemp: any;
  constructor(private data : DataService) { }

  ngOnInit() {
  }
  get getControl(){
    return this.updateEmployeedata.controls;
  }

  UpdateFunction(){
    console.log(this.updateEmployeedata.value);
  }

  updateEmployeeFun(){
    this.data.UpdateEmployee(this.updateEmployeedata).subscribe((data: {})=>{
      console.log(data);
      this.update = data;
      this.updateemp = this.update.message;
    })
  }

}
