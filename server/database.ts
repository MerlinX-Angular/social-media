import * as _ from 'lodash';
import {POSTS, USERS, COMMENTS} from "./database-data";
import {randomBytes} from './security/security';
import * as moment from 'moment';

let date = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');

class InMemoryDatabase {

  readAllUsers() {
    return _.values(USERS);
  }

  readAllPosts() {
    return _.values(POSTS).reverse();
  }

  readAllComments() {
    return _.values(COMMENTS);
  }

  // User

  createUser(email,password,username) {
    const rBId = randomBytes(4).toString('hex');
    let user = {
      id:rBId,
      email:email,
      username:username,
      passwordDigest:password,
      bio:"",
      image:"https://www.qualiscare.com/wp-content/uploads/2017/08/default-user.png",
      followingPost:[],
      followingPeople:[],
    };
    USERS.push(user);
    return user;
  }

  findUserByEmail(email:string)  {
    const users = this.readAllUsers();
    const user = _.find(users, user => user.email === email);
    return user;
  }

  findUserById(userId:string){
    let user = undefined;
    if (userId) {
      const users = this.readAllUsers();
      user = _.find(users, user => user.id.toString() === userId);
    }
    return user;
  }

  findUserByUsername(username:string)  {
    const users = this.readAllUsers();
    const user = _.find(users, user => user.username === username);
    return user;
  }

  updateUserSettings(id,body){
    let user = this.findUserById(id);
    let netArr = _.findIndex(USERS,{'id':id});
    user.image = body.image;
    user.bio = body.bio;
    USERS.splice(netArr,1,user);

    let newPosts = POSTS;
    for(let i=0;i<newPosts.length;i++){
      if(newPosts[i].author.id == id){
        newPosts[i].author.image = user.image;
      }
    }
    newPosts = POSTS;

    let newComments = COMMENTS;
    for(let i=0;i<newComments.length;i++){
      for(let j =0; j<newComments[i].comments.length; j++)
      {
        if(newComments[i].comments[j].author.id == id){
          newComments[i].comments[j].author.image = user.image
        }
      }
    }
    newComments = COMMENTS;
  }

  // Posts

  postAdd(postInfo,username){
    let date = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
    const user = this.findUserById(username);
    const rB = randomBytes(3).toString('hex');
    const rCId = randomBytes(3).toString('hex');
    let newPost = {
      "title": postInfo.title,
      "slug": postInfo.title + '-' + rB,
      "body": postInfo.body,
      "description": postInfo.description,
      "createdAt": date,
      "updatedAt": date,
      "commentId": postInfo.title + '-' + rCId,
      "tagList": postInfo.tags,
      "author": {
        "id":user.id,
        "username": user.username,
        "image": user.image,
      },
    }
    POSTS.push(newPost);
    COMMENTS.push(
      {
        "id":postInfo.title + '-' + rCId,
        "comments":[]
      })
    }

    postUpdate(id,updateInfo){
      let selectedPost = this.getPostById(id);
      let netArr = _.findIndex(POSTS,{'slug':id});
      let updatePost = {
        "title": updateInfo.title,
        "slug": selectedPost.slug,
        "body": updateInfo.body,
        "description": updateInfo.description,
        "createdAt": selectedPost.createdAt,
        "updatedAt": date,
        "commentId": selectedPost.commentId,
        "tagList": updateInfo.tags,
        "author": {
          "id": selectedPost.author.id,
          "username": selectedPost.author.username,
          "image": selectedPost.author.image,
        },
      }
      POSTS.splice(netArr,1,updatePost)
    }

    postDelete(slug){
      let postIndex = _.findIndex(POSTS,{'slug':slug});
      let newPostArray = POSTS.splice(postIndex,1);
      newPostArray = POSTS;

      for(let i=0;i<USERS.length;i++){
        for(let j = 0; j < USERS[i].followingPost.length; j++)
        {
          if(USERS[i].followingPost[j] == slug){
            USERS[i].followingPost.splice(j,1)
          }
        }
      }
      return USERS;
    }

    getPostById(id){
      let posts = this.readAllPosts();
      const post = _.find(posts, user => user.slug === id);
      return post;
    }

    getUsersPosts(id){
      let posts = this.readAllPosts();
      const post = _.filter(posts, user => user.author.id === id);
      return post.reverse();
    }

    getUsersFavoritedPosts(userFavorites){
      let favoriteMasyvas = []
      for(let favorite of userFavorites) {
        favoriteMasyvas.push(this.getPostById(favorite));
      }
      return favoriteMasyvas.reverse();
    }

    // Follow

    filterFollowingPeople(user,slug){
      if(user){
        let netArr = _.indexOf(user.followingPeople,slug);
        if(netArr >= 0){
          return true;
        }
        else {
          return false;
        }
      }
      else{
        return false;
      }
    }

    deleteFollowingPerson(user,userID){
      let netArr = _.indexOf(user.followingPeople,userID);
      user.followingPeople.splice(netArr,1);
      return true;
    }

    filterFollowingPosts(user,slug){
      if(user){
        let netArr = _.indexOf(user.followingPost,slug);
        if(netArr >= 0){
          return true;
        }
        else {
          return false;
        }
      }
      else {
        return false;
      }
    }

    unfollowPost(user,userID){
      let netArr = _.indexOf(user.followingPost,userID);
      user.followingPost.splice(netArr,1);
      return user;
    }

    // Comments

    getPostComments(commentId){
      let comments = this.readAllComments();
      const postComments = _.find(comments, {'id':commentId} );
      return postComments;
    }

    postNewComment(commentsID,newComment,user){
      const comments = db.getPostComments(commentsID);
      const rdCreatedID = randomBytes(5).toString('hex');
    //  let newID = this.getLastCommentId();
      comments.comments.push(
        {
          "createdAt": date,
          "createdID": rdCreatedID,
          "body": newComment,
          "author": {
            "id":user.id,
            "username": user.username,
            "image": user.image,
          }
        }
      )
      return comments;
    }

    deleteComment(postID,commentID){
      let postComments = this.getPostComments(postID);
      let commentsArray = _.findIndex(postComments.comments, { 'createdID': commentID });
      postComments.comments.splice(commentsArray,1);
      return postComments;
    }

    // Tags

    getPopularTags(){
      let arrs = [];
      for(let i =0; i<POSTS.length; i++){
        let tagListLength = POSTS[i].tagList.length;
        if(tagListLength > 0){
          arrs.push(...POSTS[i].tagList)
        }
      }
      let ax = arrs.reduce((acc, curr) => {
        acc[curr] ? acc[curr]++ : acc[curr] = 1;
        return acc;
      }, []);
      let keysSorted = Object.keys(ax).sort((a,b) => {return ax[b]-ax[a]})
      return keysSorted;
    }

    filterPostsBySearchTag(tag){
      let posts = this.readAllPosts();
      this.getPopularTags();
      let postLength = posts.length;
      let newArray = [];

      for(let i=0;i<postLength;i++){
        let tagListLength = posts[i].tagList.length;
        for(let c=0; c<tagListLength; c++){
          if(posts[i].tagList[c] === tag){
            newArray.push(posts[i])
          }
        }
      }
      return newArray;
    }

    // Other

    findYourFeed(followingPeopleId){
      let feedMasyvas = [];
      for(let feed of followingPeopleId) {
        feedMasyvas.push(...this.getUsersPosts(feed));
      }
      return feedMasyvas.reverse();
    }


  }

  export const db = new InMemoryDatabase();
