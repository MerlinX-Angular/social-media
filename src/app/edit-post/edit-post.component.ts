import { Component, OnInit } from '@angular/core';
import { ApiReqService } from '../api-req.service';
import {ActivatedRoute,Router,ParamMap} from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Post } from '../interfaces/post.interface';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  tagField = new FormControl();
  postId:string;
  postInfo:Post;
  addedTags:Array<any> = [];
  postForm:FormGroup;
  submitted:boolean = false;

  constructor(private apiService:ApiReqService,private route:ActivatedRoute,private formBuilder: FormBuilder,private router:Router) {
    this.route.paramMap.subscribe(params => { this.postId = params.get('slug') });
    this.apiService.getPostById(this.postId).subscribe((post:Post) => {this.postInfo = post; this.postForm.patchValue(this.postInfo); })
  }

  addTag(){
    const tag = this.tagField.value;
    if(tag == null){return;}
    else {
      let trimmedTag = tag.toLowerCase().trim();
      if (this.postInfo.tagList.indexOf(trimmedTag) < 0 && this.addedTags.indexOf(trimmedTag) < 0 && (trimmedTag.length > 0 && trimmedTag.length <= 10) && this.postInfo.tagList.length + this.addedTags.length < 4){
        this.addedTags.push(trimmedTag);
      }
    }
    this.tagField.reset('');
  }

  removeTagFromOldTags(i){
    this.postInfo.tagList.splice(i,1)
  }

  removeTagFromNewlyAdded(i){
    this.addedTags.splice(i,1)
  }

  ngOnInit() {
    this.postForm = this.formBuilder.group({
      title:[,[Validators.required,Validators.minLength(3)]],
      description:[],
      body:[,Validators.required],
    })
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
      "tags":this.postInfo.tagList.concat(this.addedTags)
    }

    this.apiService.updatePost(this.postId,post);
    if (this.postForm.valid) {
      this.router.navigate(['/global-feed']);
    }

  }

}
