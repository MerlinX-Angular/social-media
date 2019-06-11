import { Component, OnInit } from '@angular/core';
import { ApiReqService } from '../api-req.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../interfaces/user.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  user:User;
  submitted:boolean = false;

  constructor(private apiService:ApiReqService, private formBuilder: FormBuilder,private router:Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['student@gmail.com', Validators.required],
      password: ['password10',  Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    this.apiService.loginUser(this.loginForm.value).subscribe();
    this.router.navigate(['/global-feed'])
  }


}
