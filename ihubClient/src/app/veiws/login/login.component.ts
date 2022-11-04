import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../services/login.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Login} from "../../entities/login";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Md5} from "ts-md5";
import {Router} from "@angular/router";

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
  changeType: boolean = true;
  visible: boolean = true;
  error: String = '';
  // loginfun: boolean =false;

  viewPass() {
    this.changeType = !this.changeType;
    this.visible = !this.visible;
  }

  get usernameField(): FormControl {
    return this.loginForm.controls.username as FormControl;
  }

  get passwordField(): FormControl {
    return this.loginForm.controls.password as FormControl;
  }

  constructor(private loginService: LoginService, private snackBar: MatSnackBar, private router:Router) {
  }

  ngOnInit(): void {
  }
clearForm(){
    this.loginForm.reset();
}
  async submit(): Promise<void> {
    let massage;
    if (!this.loginForm.invalid) {
      try {
        let login = new Login();
        const md5 = new Md5();
        login.username = this.usernameField.value;
        login.password = md5.appendStr(this.passwordField.value).end();
        login = await this.loginService.sigIn(login);
        console.log(login)
        if (login!==null) {
          await this.router.navigate(['mainWindow'])
        } else {
          massage = "log in failed";
          this.error = massage;
          this.snackBar.open(massage, '', {
            duration: 3000,
            horizontalPosition: "center",
            verticalPosition: "top"
          });
        }

      } catch {

        //    this.snackBar.open(e.error.text, '', {duration: 2000, horizontalPosition: "center", verticalPosition: "top"});

      }
    }
  }

}
