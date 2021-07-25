import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { UsersComponent } from './users/users.component';
import { ReposComponent } from './repos/repos.component';

const routes: Routes = [
  {path: 'user-profile', component: UsersComponent },
  {path: 'search-repo', component: ReposComponent},
  {path: '', redirectTo: '/user-profile', pathMatch: 'full' },
  {path:"**",component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

  
})
export class AppRoutingModule { }
