import {Brand} from "./brand";
import {Storage} from "./storage";
import {Memory} from "./memory";
import {Category} from "./category";
export class Item {
  id?: Number;
  name?: String;
  model?: String;
  price?: Number;
  photo?: any;
  specifications?: String;
  brand?:Brand;
  storage?:Storage;
  memory?:Memory;
  category?:Category;

}
