import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  // searchName!:string;
  // @Output() searchOutput = new EventEmitter<boolean>()
  constructor() { }

  ngOnInit() {
  }
  // search(find:boolean){
  //   this.searchOutput.emit(find);
  //   this.searchName = "";
  // }

}
