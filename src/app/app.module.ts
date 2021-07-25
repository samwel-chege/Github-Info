import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UsersComponent } from './users/users.component';
import { ReposComponent } from './repos/repos.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserService } from './Services/user.service';
import { NotfoundComponent } from './notfound/notfound.component';
import { DateCountPipe } from './date-count.pipe';
import { HighlightDirective } from './highlight.directive';
//import { NgProgressModule } from '@ngx-progressbar/core';
//import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsersComponent,
    ReposComponent,
    UserFormComponent,
    NotfoundComponent,
    DateCountPipe,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    //NgProgressModule,
    //NgProgressHttpClientModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
