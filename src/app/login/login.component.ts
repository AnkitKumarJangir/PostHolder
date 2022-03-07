import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form :FormGroup;
  password :any
  phone :any;
  constructor(private fb: FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      'phone': new FormControl(null,[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      'password': new FormControl(null,Validators.required)
       

    })
  }
  get f(){  
    return this.form.controls;  
  }  
  onSubmit(){
    // console.log(this.form.value);
    if(this.form.valid){
      localStorage.setItem("isLogin",JSON.stringify(this.form.value))
      this.router.navigate(['post'])
    }
    

  }
}
