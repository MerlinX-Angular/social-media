const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

import { retrieveUserIdFromRequest } from './get-user.middleware';
import { checkIfAuthenticated } from './auth.middleware';
import { login } from './main/login';
import { logout } from './main/logout';
import { createUser } from './main/create-user.route';

import { readAllUsers } from './user/get-users';
import { getLoggedInUser } from './user/get-loggedIn-user.route';
import { findUsersById } from './user/get-user-by-id.route';
import { getUserPosts } from './user/get-users-posts.route';
import { getUsersFavoritedPosts } from './user/get-users-favorited-posts.route';

import { readAllPosts } from './posts/read-all-posts.route';
import { getPostById } from './posts/get-post-by-id';
import { getPostComments } from './posts/get-post-comments';
import { postNewComment } from './posts/post-new-comment';
import { deleteComment } from './posts/delete-comment';
import { addNewPost } from './posts/add-new-post';
import { updatePost } from './posts/update-post';
import { deletePost } from './posts/delete-post';

import { filterFollowingPeople } from './follow-favorite/filter-following-people';
import { followNewPerson } from './follow-favorite/follow-new-person';
import { deleteFollowingPerson } from './follow-favorite/delete-following-person';

import { filterFollowingPosts } from './follow-favorite/filter-following-posts';
import { followNewPost } from './follow-favorite/follow-new-post';
import { unfollowPost } from './follow-favorite/delete-following-post';

import { getYourFeed } from './logged-user/your-feed.route';
import { updateMySettings } from './logged-user/update-my-settings';

import { readAllTags } from './tags/read-all-tags.route';
import { filterPostsBySearchTag } from './tags/filter-searching-tag';

var path = require('path');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;


app.use(express.static(path.join(__dirname, 'dist')));

app.use(cookieParser());
app.use(retrieveUserIdFromRequest);
app.use(bodyParser.json());


// Main
app.route('/api/login').post(login);
app.route('/api/logout').post(logout);
app.route('/api/signup').post(createUser);


// User
app.route('/api/users').get(readAllUsers);
app.route('/api/user').get(getLoggedInUser);
app.route('/api/user/:id').get(findUsersById);
app.route('/api/user/:id/posts').get(getUserPosts);
app.route('/api/user/:id/favorites').get(getUsersFavoritedPosts);


// Posts
app.route('/api/posts').get(readAllPosts);
app.route('/api/post').post(checkIfAuthenticated,addNewPost);
app.route('/api/post/edit/:slug').put(checkIfAuthenticated,updatePost);
app.route('/api/post/delete/:slug').delete(checkIfAuthenticated,deletePost);
app.route('/api/post/slug').post(getPostById);
app.route('/api/post/comments/:commentId').get(getPostComments);
app.route('/api/post/:commentsID/comments').post(checkIfAuthenticated,postNewComment);
app.route('/api/post/:postCommentID/comments/:deleteCommentID').delete(checkIfAuthenticated,deleteComment);


// Follow/favorite
app.route('/api/user/follow/posts/:id').get(filterFollowingPosts);
app.route('/api/user/follow/post').post(followNewPost);
app.route('/api/user/follow/post/:id').delete(unfollowPost);

app.route('/api/user/follow/people/:id').get(filterFollowingPeople);
app.route('/api/user/follow/people').post(followNewPerson);
app.route('/api/user/follow/people/:id').delete(deleteFollowingPerson);


// Tags
app.route('/api/tags').get(readAllTags);
app.route('/api/tags/:tag').get(filterPostsBySearchTag);


// Logged user
app.route('/api/your-feed').get(getYourFeed);
app.route('/api/user/settings').post(updateMySettings);

app.use(cors());

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
