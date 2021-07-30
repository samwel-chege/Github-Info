import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../Interfaces/user';
import { Repos } from '../Interfaces/Repo';



@Injectable({
  providedIn: 'root'
})
export class UserService {
 foundUser: User;
 allRepos: Repos;
 repoItems:any;

  constructor(private http: HttpClient) { 
    this.foundUser = new User("","","","",0,0,0,"",new Date);
    this.allRepos = new Repos("","","",new Date,0,0,"");
  }
  searchUser(searchName: string) {
   
    interface ApiResponse {
      url:string,
      login: string;
      html_url:string;
      location:string
      public_repos:number;
      followers:number;
      following:number;
      avatar_url:string;
      created_at:Date;
    }

    return new Promise((resolve:any, reject) => {
      this.http.get<ApiResponse>('https://api.github.com/users/'+searchName).toPromise().then(
        (result) => {
         this.foundUser.url = result.url;
         this.foundUser.login = result.login;
         this.foundUser.html_url = result.html_url;
         this.foundUser.location = result.location;
         this.foundUser.public_repos = result.public_repos;
         this.foundUser.followers = result.followers;
         this.foundUser.following = result.following;
         this.foundUser.avatar_url = result.avatar_url;
         this.foundUser.created_at = result.created_at;
          console.log(result);
          resolve();
        },
        (error) => {
          console.log(error);
          reject();
        }
      );
    });
  }
  getRepos(searchName:any){
    interface ApiResponse {
      repos:[]

    }
    
    return new Promise((resolve:any,reject)=>{
      this.http.get<ApiResponse>('https://api.github.com/users/'+searchName+'/repos?').toPromise().then(
        (results) => {
          this.repoItems = results;
          console.log(results)
          resolve();
        },
        (error) => {
          console.log(error);
          reject();
        }
      );
    });
  }
}
