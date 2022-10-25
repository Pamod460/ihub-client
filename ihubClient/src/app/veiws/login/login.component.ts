import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../services/login.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Login} from "../../entities/login";
import {MatSnackBar} from "@angular/material/snack-bar";
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

  constructor(private loginService: LoginService, private snackBar: MatSnackBar,) {
  }

  ngOnInit(): void {
  }

  async submit(): Promise<void> {
    let massage;
    if (!this.loginForm.invalid) {
      try {
        let login = new Login();
        login.username = this.usernameField.value;
        login.password = this.passwordField.value;
        login = await this.loginService.sigIn(login);
        if (login) {

        } else {
          massage = "log in failed";
          this.error = massage;
          this.snackBar.open(massage, '', {
            duration: 2000,
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
