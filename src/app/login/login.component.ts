import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor() {}
  alert = false;
  error: any = '';
  admin=false
  ngOnInit(): void {}
  adminlogin(login: NgForm) {
    console.log(login.value);
    if (
      login.value.name == 'NISHIDH' &&
      login.value.password == 'Nishidh@123'
    ) {
      console.log('success');
      this.error = '';
      login.reset();
      this.alert = true;
      this.admin=true
    } else {
      this.error = "You Aren't Nishidh ";
    }
  }
}
