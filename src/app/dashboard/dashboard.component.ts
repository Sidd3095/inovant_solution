import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  name:any
  last_name:any;
  email:any;
  phone:any
  create_date:any
  image:any;
  alert = '';

  constructor(private userservice : UserService,private router:Router) { }

  ngOnInit(): void {

    //--- get all data from sessionStorage-----//
    this.name= sessionStorage.getItem('name')
    this.last_name= sessionStorage.getItem('last_name')
    this.email= sessionStorage.getItem('email')
    this.phone= sessionStorage.getItem('num')
   this.create_date= sessionStorage.getItem('create_date')
   this.image = sessionStorage.getItem('image')


  }

  logout(){

    // --- clear all data when user logout----//
    if (sessionStorage.length != 0) {
      sessionStorage.removeItem('name')
      sessionStorage.removeItem('last_name')
      sessionStorage.removeItem('email')
      sessionStorage.removeItem('num')
      sessionStorage.removeItem('create_date')
      sessionStorage.removeItem('image')
      sessionStorage.removeItem('Session')

      this.alert = 'logout Sucessfully  !!!';
      setTimeout(() => this.router.navigate(['/login']), 3000);

    }
  }
}
