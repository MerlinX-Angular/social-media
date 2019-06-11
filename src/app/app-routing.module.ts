import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { GlobalFeedComponent } from './global-feed/global-feed.component';
import { YourFeedComponent } from './your-feed/your-feed.component';
import { FeedResolver } from './feed.resolver';
import { UserPostsResolver } from './user-posts.resolver';
import { ProfileComponent } from './profile/profile.component';
import { MyPostsComponent } from './my-posts/my-posts.component';
import { FavoritedPostsComponent } from './favorited-posts/favorited-posts.component';
import { ViewPostComponent } from './view-post/view-post.component';
import { FavoriteResolver } from './favorite.resolver';
import { NewPostComponent } from './new-post/new-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { SettingsComponent } from './settings/settings.component';
import { PostResolver } from './post.resolver';
import { HomeComponent } from './home/home.component';
import { TagSearchComponent } from './tag-search/tag-search.component';
import { YourFavoriteComponent } from './your-favorite/your-favorite.component';
import { IfLoggedDenyGuard } from './if-logged-deny.guard';
import { UserGuard } from './user.guard';

const routes: Routes = [
  {path:'global-feed', redirectTo:'global-feed/1',pathMatch:'full'},
  {path:'', redirectTo:'global-feed/1',pathMatch:'full'},
  {path:'', component:HomeComponent,
  children:[
    {path:'global-feed/:page', component:GlobalFeedComponent},
    {path:'your-feed', component:YourFeedComponent,resolve: {FeedResolve:FeedResolver},canActivate:[UserGuard]},
    {path:'your-favorites', component:YourFavoriteComponent,resolve: {favoritedPosts:FavoriteResolver},canActivate:[UserGuard]},
    {path:'tag-search/:tag', component:TagSearchComponent},
  ]
},
{path:'login', component:LoginComponent,canActivate:[IfLoggedDenyGuard]},
{path:'register', component:RegisterComponent,canActivate:[IfLoggedDenyGuard]},
{path:'new-post', component:NewPostComponent,canActivate:[UserGuard]},
{path:'edit/:slug', component:EditPostComponent,canActivate:[UserGuard]},
{path:'global-feed', component:GlobalFeedComponent},
{path:'your-feed', component:YourFeedComponent,resolve: {FeedResolve:FeedResolver}},
{path:'settings', component:SettingsComponent,canActivate:[UserGuard]},
{path:'posts/:slug', component:ViewPostComponent, resolve: {postResolve:PostResolver}},
{path:'user/:user', component:ProfileComponent,
children:[
  {path:'', component:MyPostsComponent, resolve: {userPostsResolve:UserPostsResolver}},
  {path:'favorites', component:FavoritedPostsComponent,resolve: {favoritedPosts:FavoriteResolver}},
],

},
{path: '**', redirectTo: '/global-feed/1'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
