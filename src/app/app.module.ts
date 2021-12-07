import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { UsersComponent } from './pages/users/users.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { UserDropdownComponent } from './components/user-dropdown/user-dropdown.component';
import { CopyComponentComponent } from './components/copy-component/copy-component.component';
import { UserInfoCardComponent } from './components/user-info-card/user-info-card.component';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { HistoryComponent } from './pages/history/history.component';
import { AddItemComponent } from './pages/add-item/add-item.component';
import { StickyNoteComponent } from './components/sticky-note/sticky-note.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ItemCardComponent,
    UsersComponent,
    UserProfileComponent,
    UserCardComponent,
    UserDropdownComponent,
    CopyComponentComponent,
    UserInfoCardComponent,
    MyProfileComponent,
    HistoryComponent,
    AddItemComponent,
    StickyNoteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
