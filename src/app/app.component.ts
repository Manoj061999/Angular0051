import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'practical';
  
  constructor(private router : Router) { }

  //UPDATE EMP
  updateRouting(){
    this.router.navigate(['update']);
  }

  //DELETE EMP
  deleteRouting(){
    this.router.navigate(['delete']);
  }

  //SEARCH BY ID
  searchRouting(){
    this.router.navigate(['viewbyId']);
  }

  //SHOW ALL RECORDS
  ViewallRouting(){
    this.router.navigate(['showall'])
  }

  //EMPLOYEE 
  EmployeRouting(){
    this.router.navigate(['employee']);
  }
}


