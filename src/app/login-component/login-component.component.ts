import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginServicesService } from '../login-services.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  constructor(private loginService: LoginServicesService ){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  login(form: NgForm){
    const email=form.value.email
    const password=form.value.password

    this.loginService.login(email, password);
  }

}
