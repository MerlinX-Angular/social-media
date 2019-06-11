import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavigationComponent } from './navigation/navigation.component';
import { GlobalFeedComponent } from './global-feed/global-feed.component';
import { YourFeedComponent } from './your-feed/your-feed.component';
import { ProfileComponent } from './profile/profile.component';
import { MyPostsComponent } from './my-posts/my-posts.component';
import { FavoritedPostsComponent } from './favorited-posts/favorited-posts.component';
import { ViewPostComponent } from './view-post/view-post.component';
import { NewPostComponent } from './new-post/new-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { ReactiveFormsModule } from '@angular/forms'
import { FormsModule } from '@angular/forms';
import { SettingsComponent } from './settings/settings.component';
import { FollowButtonComponent } from './follow-button/follow-button.component';
import { FavoriteButtonComponent } from './favorite-button/favorite-button.component';
import { PostCommentComponent } from './post-comment/post-comment.component';
import { HomeComponent } from './home/home.component';
import { TagSearchComponent } from './tag-search/tag-search.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { YourFavoriteComponent } from './your-favorite/your-favorite.component';
import { UserGuard } from './user.guard';
import { UserService } from './user.service';
import { ApiReqService } from './api-req.service';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavigationComponent,
    GlobalFeedComponent,
    YourFeedComponent,
    ProfileComponent,
    MyPostsComponent,
    FavoritedPostsComponent,
    ViewPostComponent,
    NewPostComponent,
    EditPostComponent,
    SettingsComponent,
    FollowButtonComponent,
    FavoriteButtonComponent,
    PostCommentComponent,
    HomeComponent,
    TagSearchComponent,
    YourFavoriteComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [
    UserGuard,
    CookieService,
    ApiReqService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
