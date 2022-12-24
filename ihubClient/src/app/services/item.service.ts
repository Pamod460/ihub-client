import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ApiConfig} from "../shared/api-config";
import {Item} from "../entities/item";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) {
  }

  async getAll(): Promise<Item[]> {
    const url = ApiConfig.createURL("items")
    // @ts-ignore
    return this.http.get<Item[]>(url).toPromise();

  }

  async getById(id: number): Promise<Item> {
    const url = ApiConfig.createURL("items/id/"+id)
    // @ts-ignore
    return this.http.get<Item>(url).toPromise();

  }

}
