import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private http:HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      fullName:new FormControl('', [Validators.required]),
      email:new FormControl('', [Validators.required]),
      mobile:new FormControl('', [Validators.required]),
      password:new FormControl('', [Validators.required,Validators.minLength(5)])
    })
  }

  //signup field validation start
  get fullName(){
    return this.signupForm.get('fullName');
  }
  get email(){
    return this.signupForm.get('email')
  }
  get mobile(){
    return this.signupForm.get('mobile')
  }
  get password(){
    return this.signupForm.get('password')
  }

  //signup field validation end

  signUp(){
    this.http.post<any>('http://localhost:3000/signupUsers', this.signupForm.value)
    .subscribe(res=>{
      alert("Signup Successfull");
      this.signupForm.reset();
      this.router.navigate(['login']);
    },err=>{
      alert('Something went wrong')
    })
  }



}
