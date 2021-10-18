import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { FormGroup } from '@angular/forms';

//CREATE EMP
export class employee {
  Empname : string | undefined;
  empId : string | undefined;
  email : string | undefined;
  mobile : Number | undefined;
  dob : string | undefined;
  password : string | undefined;
  gender : string | undefined;
  address : string | undefined;
}

//LOGIN EMP
export class login {
  email : string | undefined;
  password : string | undefined;
}

//UPDATE
export class update {
  empId : string | undefined;
  dob : string | undefined;
  mobile : Number | undefined;
  address : string | undefined;
}

export class deletee {
  empId : string | undefined;
}

export class search {
  empId : string | undefined;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  endPoint = 'http://localhost:9001';
  AddResult: any;

  constructor(private httpClient: HttpClient) { }

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  //getdata
GetAllEmployee():Observable<employee>{
  return this.httpClient.get<employee>(this.endPoint + '/api/ViewAll');
}










  //CREATE EMPLOYEE 
  AddEmployee(data: FormGroup):Observable<employee> {

    let savedata = {
      "Empname" : data.value.Empname,
      "empId" : data.value.empId,
      "email" : data.value.email,
      "mobile" : data.value.mobile,
      "dob" : data.value.dob,
      "password" : data.value.password,
      "gender" : data.value.gender,
      "address" : data.value.address
    }
    console.log(savedata,"CREATE EMPLOYEE");
    return this.httpClient.post<employee>(this.endPoint + '/api/createemployee',JSON.stringify(savedata), this.httpHeader)
  }

//LOGIN EMPLOYEE
LoginEmployee(data: FormGroup):Observable<login> {

  let logindata = {
    "email":data.value.email,
    "password":data.value.password
  }
  console.log(logindata,"LOGIN EMP");
  return this.httpClient.post<login>(this.endPoint + '/api/Login',JSON.stringify(logindata), this.httpHeader)
}

//UPDATE
UpdateEmployee(data: FormGroup):Observable<update> {

  let updatedata = {
    "empId":data.value.empId,
    "dob":data.value.dob,
    "mobile":data.value.mobile,
    "address":data.value.address
  }
  console.log(updatedata,"UPDATE EMP");
  return this.httpClient.post<update>(this.endPoint + '/api/update',JSON.stringify(updatedata), this.httpHeader)
}

//DELETE
DeleteEmployee(data: FormGroup):Observable<deletee> {

  let deletedata = {
    "empId":data.value.empId
  }
  console.log(deletedata,"DELETE EMP");
  return this.httpClient.post<deletee>(this.endPoint + '/api/delete',JSON.stringify(deletedata), this.httpHeader)
    }


//VIEW BY ID 
SearchEmployee(data:FormGroup):Observable<search> {

  let searchdata = {
    "empId":data.value.empId
  }
  console.log(searchdata,"VIEW EMP BY ID");
  return this.httpClient.post<search>(this.endPoint + '/api/read',JSON.stringify(searchdata), this.httpHeader)
    }
}
