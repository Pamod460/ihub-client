import {Component, OnInit} from '@angular/core';
import {ItemService} from "../../../services/item.service";
import {Item} from "../../../entities/item";
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";
import {OwlOptions} from "ngx-owl-carousel-o";

@Component({
  selector: 'app-item-veiw',
  templateUrl: './item-veiw.component.html',
  styleUrls: ['./item-veiw.component.scss']
})
export class ItemVeiwComponent implements OnInit {
  items: Item[] = [];
  // imageurl: SafeUrl = "";
  col: String[] = [];
  // datum: any;

  constructor(private itemService: ItemService, private domSanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.loadAll();
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      },
      // 940: {
      //  items: 4
      // }
    },
    nav: true
  }

  // @ts-ignore
  async loadAll(): Promise<void> {
    this.items = await this.itemService.getAll();
   //    console.log(this.items[1]['category'])
    }

  }

