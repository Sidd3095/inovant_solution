import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;
  submitted= false;
  alert = '';

  constructor(private formBuilder: FormBuilder,private userservice : UserService,private router:Router) { }

  ngOnInit() {

    //------ validation of form field-----//
    this.form = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });



  }

    // convenience getter for easy access to form fields
  get formData() { return this.form.controls; }


  onSubmit(){
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }else{

      this.userservice.userdetail(this.formData.email.value, this.formData.password.value).subscribe((res:any)=>{

        // ------check response status is true or false----//
        if(res.status == 200){
                sessionStorage.setItem('name',res.data.first_name)
                sessionStorage.setItem('last_name',res.data.last_name)
                sessionStorage.setItem('email',res.data.email)
                sessionStorage.setItem('num',res.data.phone)
                sessionStorage.setItem('create_date',res.data.create_date)
                sessionStorage.setItem('image',res.data.image)
                sessionStorage.setItem('Session',res.data.id)
                this.alert = 'Sucessfully login !!!';
                setTimeout(() => this.router.navigate(['/dashboard']), 3000);



        }else if(res.status == 404 || res.status == 201){

          //--- show alert message----//
          alert(res.message)
        }
      })
    }

  }
}
