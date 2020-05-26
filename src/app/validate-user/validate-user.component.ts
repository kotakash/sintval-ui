import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ValidateService } from '../validate.service';

@Component({
  selector: 'app-validate-user',
  templateUrl: './validate-user.component.html',
  styleUrls: ['./validate-user.component.css']
})
export class ValidateUserComponent implements OnInit {
  public welcome="Authenticate User";
  public result;
  public resultCol;
  public resultErr;
  
  userModel = new User('','','');
  constructor(private _validateService: ValidateService) { }

  ngOnInit(): void {
  }
  onValidate() {
    
    
    this._validateService.validate(this.userModel)
    .subscribe(data => {if (data.includes('Validation'))
                          {this.result=data;this.resultCol="darkgreen";} 
                        else {this.result=data;this.resultCol="red";}},
                error => this.resultErr=error);
    
    
  }
}
