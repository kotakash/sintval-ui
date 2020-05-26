import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { AddUserService } from '../add-user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  public welcome = "User Registration";
  public result;
  public resultErr;
  userModel = new User('','','');
  
  constructor(private _addUserService: AddUserService) { }
  onSubmit()
  {
    
    //  let userM=JSON.parse(JSON.stringify(this.userModel));
    this._addUserService.record(this.userModel)
    .subscribe( data => this.result=data,error => this.resultErr=error);
    
  }
  ngOnInit(): void {
  }
}
