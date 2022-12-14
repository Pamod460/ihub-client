import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {SignUpService} from "../../services/sign-up.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Signup} from "../../entities/signup";
import {Md5} from "ts-md5";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signUpForm = new FormGroup(
    {
      userName: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(255),
        Validators.pattern('^([A-Z][a-z]{2,})$')]
      ),
      email: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(255),
        Validators.pattern('^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-z]+)$')]
      ),
      mobile: new FormControl("", [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(12),
        Validators.pattern('^(0|94)[7][01245678][0-9]{7}$')]
      ),
      passWord: new FormControl("", [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$')]
      ),
      verifyPassWord: new FormControl("", [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$')]
      ),
    }
  );

  get userNameField(): FormControl {
    return this.signUpForm.controls.userName as FormControl;
  }

  get emailField(): FormControl {
    return this.signUpForm.controls.email as FormControl;
  }

  get mobilField(): FormControl {
    return this.signUpForm.controls.mobile as FormControl;
  }

  get passwordField(): FormControl {
    return this.signUpForm.controls.passWord as FormControl;
  }

  get verifyPassWordField(): FormControl {
    return this.signUpForm.controls.verifyPassWord as FormControl;
  }

  changeType: boolean = true;
  visible: boolean = true;
  changeType2: boolean = true;
  visible2: boolean = true;
  error: String = '';

  viewPass() {
    this.changeType = !this.changeType;
    this.visible = !this.visible;
  }

  viewPassVerify() {
    this.changeType2 = !this.changeType2;
    this.visible2 = !this.visible2;
  }


  constructor(private _snackBar: MatSnackBar, private signUpService: SignUpService, private router: Router) {
  }

  ngOnInit(): void {

  }

  clearForm() {
    this.signUpForm.reset();

  }

  async submit(): Promise<void> {
    if (!this.signUpForm.invalid) {
      if (this.passwordField.value == this.verifyPassWordField.value) {
        let signup = new Signup();
        signup.username = this.userNameField.value;
        signup.email = this.emailField.value;
        signup.mobile = this.mobilField.value;
        const md5 = new Md5();
        signup.password = md5.appendStr(this.passwordField.value).end();
        signup = await this.signUpService.sigUp(signup);
        if (signup) {
          this.router.navigate(['login'])
        }
        this.clearForm();

      } else {
        this._snackBar.open("pass word does not match", '', {
          duration: 2000,
          horizontalPosition: "center",
          verticalPosition: "top"
        });

      }
    }

  }
}
