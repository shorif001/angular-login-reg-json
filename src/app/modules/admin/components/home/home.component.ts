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
  constructor() { }

  ngOnInit(): void {
  }


  onFormSubmit(user: users){
    console.log(user);
  }

resetUserForm(userForm: NgForm) {
  userForm.resetForm();;
}

}
