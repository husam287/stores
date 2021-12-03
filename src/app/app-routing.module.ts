import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemComponent } from './pages/add-item/add-item.component';
import { HistoryComponent } from './pages/history/history.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { UsersComponent } from './pages/users/users.component';
import { IsAuthGuard } from './services/guards/is-auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full', canActivate: [IsAuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: RegisterComponent },
  {
    path: 'users', canActivate: [IsAuthGuard], children: [
      { path: '', component: UsersComponent, pathMatch: 'full' },
      { path: ':id', component: UserProfileComponent }
    ]
  },
  {
    path: 'profile', canActivate: [IsAuthGuard], children: [
      { path: '', component: MyProfileComponent, pathMatch: 'full' },
      { path: 'history', component: HistoryComponent },
      { path: 'add-item', component: AddItemComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
