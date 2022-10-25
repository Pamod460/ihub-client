import { Injectable } from '@angular/core';
import {Login} from "../entities/login";
import {ApiConfig} from "../shared/api-config";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  async sigIn(login: Login):Promise<Login> {
    const url = ApiConfig.createURL("users/login")
    // @ts-ignore
    return this.http.post<Login>(url, login).toPromise();
  }
}
