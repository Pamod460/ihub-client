import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../services/login.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Login} from "../../entities/login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']


})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup(
    {
      username: new FormControl("", [
        Validators.required]),

      password: new FormControl("", [
        Validators.required])


    }
  )

  get usernameField(): FormControl {
    return this.loginForm.controls.username as FormControl;
  }
  get passwordField(): FormControl {
    return this.loginForm.controls.password as FormControl;
  }

  constructor(private loginService :LoginService) {}


   ngOnInit(): void {
  }


  async submit():Promise<void>{
  // if(!this.loginForm.invalid) {
    try {
      let login = new Login();
      login.username = this.usernameField.value;
      login.password = this.passwordField.value;
      login = await this.loginService.login(login);
      console.log(login);
    }catch (e){
            // this._snackBar.open(e.error.text, '', {duration: 2000, horizontalPosition: "center", verticalPosition: "top"});

    }
  }
  // }

}
