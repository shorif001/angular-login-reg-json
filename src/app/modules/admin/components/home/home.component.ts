import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('userForm')
  userForm!: NgForm;
  constructor() { }

  ngOnInit(): void {
  }


  onFormSubmit(user:any){
    console.log(user);
  }

resetUserForm(userForm: NgForm) {
  userForm.resetForm();;
}

}
