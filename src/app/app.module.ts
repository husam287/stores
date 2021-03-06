import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule, BUCKET } from '@angular/fire/compat/storage';

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
import { InterceptorService } from './services/interceptors/interceptor.service';
import { NotfoundComponentComponent } from './components/notfound-component/notfound-component.component';
import { LoaderComponent } from './components/loader/loader.component';
import { LoadingInterceptor } from './services/interceptors/loading.interceptor';
import { environment } from 'src/environments/environment';

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
    NotfoundComponentComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule
    
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
    { provide: BUCKET, useValue: 'online-shop-project-team13' }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
