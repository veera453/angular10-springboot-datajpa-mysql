import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from '../alert-banner/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  username: string = '';
  pwd: any = '';

  constructor(private formBuilder: FormBuilder, private router: Router, private alertService: AlertService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      'username': [null, Validators.required],
      'pwd': [null, Validators.required]
    })
  }

  loginPage(value:any){
    console.log(this.loginForm.valid);
    if(this.loginForm.valid){
    if(value.username === 'admin' && value.pwd === 'admin'){
      this.router.navigate(['student']);
    }else {
      this.alertService.error('You are not authorized to access this application', {title: "Error: "})
    }
  }
  }

}
