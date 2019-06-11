import { Component, OnInit } from '@angular/core';
import { ApiReqService } from '../api-req.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup;
  submitted = false;
  error:string;
  showError = false;
  unsubUser:Subscription;
  constructor(private apiService:ApiReqService, private formBuilder: FormBuilder,private router:Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username:[ ,Validators.required],
      email:[,[Validators.required,Validators.email]],
      password: [,  [Validators.required,Validators.minLength(6)]]
    });
  }

  OnDestroy(){
    this.unsubUser.unsubscribe();
  }

  onSubmit(){
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }

    this.unsubUser = this.apiService.registerUser(this.registerForm.value).subscribe(
      (user) => { },
      error => {
        if(error.status == 422){
          const validationErrors = error.error.message;
          if((validationErrors.includes('username') && validationErrors.includes('email'))){
            const usernameError = this.registerForm.controls['username'];
            usernameError.setErrors({
              serverError: 'such user already exists'
            });
            const emailError = this.registerForm.controls['email'];
            emailError.setErrors({
              serverError: 'such email already exists'
            })
          }
          else {
            if(validationErrors.includes('username')){
              const usrError = this.registerForm.controls['username'];
              usrError.setErrors({
                serverError: validationErrors
              })
            }
            else if(validationErrors.includes('email'))
            {
              const usrEmail = this.registerForm.controls['email'];
              usrEmail.setErrors({
                serverError: validationErrors
              })
            }
          
          }

        }
        else {
          this.error = error.error.message;
        }
      },
      () => {
        this.router.navigate(['/global-feed'])},
      );
    }
  }
