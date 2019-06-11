import { Component, OnInit } from '@angular/core';
import { ApiReqService } from '../api-req.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  tagField = new FormControl();
  newTags:Array<string> = [];
  postForm:FormGroup;
  submitted:Boolean = false;
  constructor(private apiService:ApiReqService,private formBuilder: FormBuilder,private router:Router) { }

  ngOnInit() {
    this.postForm = this.formBuilder.group({
      title:[,[Validators.required,Validators.minLength(3)]],
      description:[],
      body:[,Validators.required],
    })
  }

  addTag(){
    const tag = this.tagField.value;
    if(tag == null){return;}
    else {
      let trimmedTag = tag.toLowerCase().trim();
      if (this.newTags.indexOf(trimmedTag) < 0 && (trimmedTag.length > 0 && trimmedTag.length <= 10) && this.newTags.length < 4){
        this.newTags.push(trimmedTag);
      }
    }
    this.tagField.reset('');
  }

  removeTagFromNewlyAdded(i){
    this.newTags.splice(i,1)
  }

  submitNewPost(){
    this.submitted = true;
    if (this.postForm.invalid) {
      return;
    }

    let post = {
      "title":this.postForm.value.title,
      "description":this.postForm.value.description,
      "body":this.postForm.value.body,
      "tags":this.newTags
    }
    this.apiService.addNewPost(post);
    this.router.navigate(['/global-feed']);
  }

}
