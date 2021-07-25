import { Component, OnInit } from '@angular/core';
import { Repository } from '../Interfaces/Repo';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {

  repo?: Repository;
  constructor(public repoService: UserService){}

  repoSearch(searchName:any){
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

  ngOnInit() {
    this.repoSearch('samwel-chege');
  }

  
  
}
