import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {

  repos: any[]=[];
  constructor(private repoService: UserService, private http: HttpClient){}

  repoSearch(input: string){
    this.repoService.getRepos(input).then (
      (data:any) => {
        this.repos = data.items;
        console.log(data)

      }), (error: any) =>{
        
      }
   
  }
 

  ngOnInit() {
    this.repoSearch('samwel-chege');
  }

  
  
}
