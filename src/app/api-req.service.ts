import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, map,shareReplay } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiReqService {
  api:string = 'http://localhost:3000';
  uss;
  NoUser = {
    id: undefined,
    username:undefined,
    email:undefined
  }

  private subject = new BehaviorSubject<any>(this.NoUser);
  user = this.subject.asObservable();
  isLoggedIn = this.user.pipe(map(user => !!user.email));
  isLoggedOut = this.isLoggedIn.pipe(map(isLogged => !isLogged));


  constructor(private http:HttpClient) {
    this.http.get('/api/user')
    .subscribe(user => {this.subject.next(user ? user : this.NoUser);});
  }

  // Login/register start

  loginUser(user){
    return this.http.post('/api/login',user).pipe(
      shareReplay(),
      map(user => this.subject.next(user)));
    }

    registerUser(user){
      return this.http.post('/api/signup',user)
      .pipe(shareReplay(), map(user => this.subject.next(user[0])));
    }

    logOutUser() {
      return this.http.post('/api/logout', null).pipe(
        shareReplay(),
        map(user => this.subject.next(this.NoUser)))
      }

      // Login/register end

      // Post start

      getPosts(){
        return this.http.get('/api/posts');
      }

      getPostById(slug){
        return this.http.post('/api/post/slug',{'postId':slug})
      }

      addNewPost(post){
        return this.http.post('/api/post/',post).subscribe();
      }

      updatePost(slug,userInfo){
        return this.http.put('/api/post/edit/'+slug,userInfo).subscribe();
      }

      deletePost(slug){
        return this.http.delete('/api/post/delete/'+slug).subscribe();
      }

      getPostComments(commentId){
        return this.http.get('/api/post/comments/' + commentId);
      }

      postNewComment(newComment,commentsID){
        return this.http.post('/api/post/'+ commentsID +'/comments',{"newComment":newComment})
      }

      deleteComment(postCommentID,deleteCommentID){
        return this.http.delete('/api/post/'+ postCommentID +'/comments/'+ deleteCommentID)
      }

      checkPostFollowStatus(id){
        return this.http.get('/api/user/follow/people/'+id);
      }

      checkPostFavoriteStatus(id){
        return this.http.get('/api/user/follow/posts/'+id);
      }

      // Post end

      // User start

      getFeed(){
        return this.http.get('/api/your-feed');
      }

      updateMySettings(updatedInfo){
        return this.http.post('/api/user/settings',updatedInfo).subscribe();
      }

      getUserById(user){
        return this.http.get('/api/user/'+user);
      }

      getSelectedUserPosts(username){
        return this.http.get('/api/user/'+ username +'/posts');
      }

      getSelectedUserFavoritedPosts(username){
        return this.http.get('/api/user/'+ username +'/favorites');
      }

      followPost(slug){
        return this.http.post('/api/user/follow/post',{ "slug":slug }).subscribe();
      }

      unfollowPost(slug){
        return this.http.delete('/api/user/follow/post/'+slug).subscribe();
      }

      followPostAuthor(authorID){
        return this.http.post('/api/user/follow/people',{"authorID":authorID}).subscribe()
      }

      unfollowPostAuthor(userID){
        return this.http.delete('/api/user/follow/people/'+userID).subscribe();
      }

      // User end

      // Tags start

      getTags(){
        return this.http.get('/api/tags');
      }

      filterPostsBySearchTag(tag){
        return this.http.get('/api/tags/'+ tag);
      }

    }
