import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ApiConfig} from "../shared/api-config";
import {Signup} from "../entities/signup";

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private http: HttpClient) { }

  async sigUp(signUp: Signup):Promise<Signup> {
    const url = ApiConfig.createURL("users/save")
    // @ts-ignore
    return this.http.post<Signup[]>(url, signUp).toPromise();
  }

}
