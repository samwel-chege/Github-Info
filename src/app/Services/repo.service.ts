import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class RepoService {

  getRepos(repoName:string) {

    return this.http.get(` https://api.github.com/search/repositories?q=${repoName}`);
  }

  constructor(private http: HttpClient ) { }

  
}
