import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: any;
  error: any;

  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    
  }
}
