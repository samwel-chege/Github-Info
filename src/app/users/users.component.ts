import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';
import { Repos } from '../Interfaces/Repo';
import { User } from '../Interfaces/user';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  foundUser!: User;
  repo!: Repos[];

  constructor(private myService: UserService, public repoService: UserService) { }

  searchs(searchName:string) {
    if (searchName !== "" ){
      this.myService.searchUser(searchName)
      this.repoService.getRepos(searchName)
      console.log(searchName)
    }
    
    
    // this.myService.searchUser(searchName).then(
    //   (success)=>{
    //     this.user = this.myService.foundUser;
    //   },
    //   (error)=>{
    //     console.log(error)
    //   }
    // );
    //   this.repoService.getRepos(searchName).then(
    //     (results:any)=>{
    //       this.repo.push(results)
    //       console.log(this.repo);
    //     },
    //     (error)=>{
    //       console.log(error);
    //     }
    //   );
   }
  

  ngOnInit(): void {
    this.foundUser = this.myService.foundUser;
    this.searchs('samwel-chege');
  }

}
