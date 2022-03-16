import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { users } from './userList'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // @ViewChild('userForm')
  userForm!: NgForm;

  userss = [
    {name: 'shorif', phone:'01010001', email:'shorif@gmail.com'},
    {name: 'shorif', phone:'01010001', email:'shorif@gmail.com'}
  ];

  url="http://localhost:3000/users";

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }


  userSubmit(userData: users){
    console.log(userData);
    this.userss = this.userForm.value;
    this.userss.push(userData);
    this.http.post<users>(this.url, userData).subscribe((res)=>{
      console.log(res);
    })
  }

resetUserForm(userForm: NgForm) {
  userForm.resetForm();;
}

}
