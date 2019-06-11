import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { ApiReqService } from '../api-req.service';
import { UserService } from '../user.service';
import { User } from '../interfaces/user.model';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  settingsForm:FormGroup;
  userInfo:User;
  user1: User = new User();
  user2: User = new User();

  constructor(private fb: FormBuilder,private apiService:ApiReqService,private userService:UserService) {
    this.settingsForm = this.fb.group({
      username: [,[Validators.required,Validators.minLength(4)]],
      image:[],
      bio: [],
      email: [,[Validators.required,Validators.email]],
    });
  }

  ngOnInit() {
    this.userService.populate();
    this.userService.getCurrentUser().subscribe(link => {
    this.user1 = link;
      if(this.user1.id){
       this.settingsForm.patchValue(this.user1);
      }
      else {
    this.apiService.user.subscribe(
        user => { this.user2 = user; this.settingsForm.patchValue(this.user2);});
    }
  });
  }

  submitForm(){
    this.apiService.updateMySettings(this.settingsForm.value);
  }

}
