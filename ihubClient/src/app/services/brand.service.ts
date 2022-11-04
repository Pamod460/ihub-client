import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ApiConfig} from "../shared/api-config";
import {Brand} from "../entities/brand";

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private http :HttpClient) { }

  async getAll():Promise<Brand[]>{
    const url = ApiConfig.createURL("brands")
    // @ts-ignore
    return this.http.get<Brand[]>(url).toPromise();

  }

}
