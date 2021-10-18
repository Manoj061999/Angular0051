import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {
  deletedata = new FormGroup({
    empId : new FormControl('')
  });
  delete: any;
  empdel: any;
  constructor(private data : DataService) { }

  ngOnInit() {
  }

  deleteFunction(){
    console.log(this.deletedata.value);
  }



  DeleteEmployeeFun(){
    this.data.DeleteEmployee(this.deletedata).subscribe((data: {})=>{
      console.log(data);
      this.delete = data;
      this.empdel = this.delete.message;
    })
  }

}
