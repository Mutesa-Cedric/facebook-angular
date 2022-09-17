import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostComponent } from './post/post.component';
import { MenuComponent } from './menu/menu.component';
import { NotificationsBarComponent } from './notifications-bar/notifications-bar.component';
import { StoryComponent } from './story/story.component';
import { NotificationComponent } from './notification/notification.component';
import { FriendRequestComponent } from './friend-request/friend-request.component';
import { FeedComponent } from './feed/feed.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { StoriesComponent } from './stories/stories.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostComponent,
    MenuComponent,
    NotificationsBarComponent,
    StoryComponent,
    NotificationComponent,
    FriendRequestComponent,
    FeedComponent,
    CreatePostComponent,
    StoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
