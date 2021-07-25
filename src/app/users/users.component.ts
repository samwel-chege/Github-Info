import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';
import { Repository } from '../Interfaces/Repo';
import { User } from '../Interfaces/user';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user!: User;
  repo!: Repository;

  constructor(public myService: UserService, private repoService: UserService) { }

  searchs(searchName:any) {
    this.myService.searchUser(searchName).then(
      (success)=>{
        this.user = this.myService.foundUser;
      },
      (error)=>{
        console.log(error)
      }
    );
      this.repoService.getRepos(searchName).then(
        (results)=>{
          this.repo =this.repoService.allRepos
          console.log(this.repo);
        },
        (error)=>{
          console.log(error);
        }
      );
  }

  ngOnInit(): void {
    this.searchs('samwel-chege');
  }

}
