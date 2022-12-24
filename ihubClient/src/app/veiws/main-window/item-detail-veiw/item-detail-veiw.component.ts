import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {ItemService} from "../../../services/item.service";
import {Item} from "../../../entities/item";

@Component({
  selector: 'app-item-detail-veiw',
  templateUrl: './item-detail-veiw.component.html',
  styleUrls: ['./item-detail-veiw.component.scss']
})
export class ItemDetailVeiwComponent implements OnInit {
  readonly refreshRate = 10000;
  live = false;
  // @ts-ignore
  activatedId: number = null;
  // @ts-ignore
  item: Item = null

  constructor(private route: ActivatedRoute, private itemService: ItemService,private router: Router) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      // @ts-ignore
      this.activatedId = +params.get('id');
    });
    this.live = true;
    this.loadData().then(() => {
      this.refreshData();
    })
  }

  async loadData(): Promise<void> {

    this.item = await this.itemService.getById(this.activatedId);
    // if (this.item){
    //   this.router.navigate(['mainWindow'])
    // }
  }

  async refreshData() {
    if (this.live) {
      await this.loadData();
      setTimeout(() => {
        this.refreshData();
      }, this.refreshRate)
    }
  }
}
