import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  constructor(private api: ApiService) {}
  ngOnInit(): void {
    this.api.cardDetail().subscribe((data) => {
      this.cardData = data;
    });
  }

  cardData: any = [];
  item: any = 0;
  id = '';
  

  itemplus(cardId: any) {
    this.id = cardId;
    // if(cardId==0){
    this.item++;

    // }
  }
  itemminus() {
    if (this.item == 0) {
      this.item = 0;
    } else {
      this.item--;
    }
  }

  addtocart(data: any) {
    console.log(data);
    this.api.adduserfood(data).subscribe(data=>data)   
    this.ngOnInit() 
  }
  itemid(id:any){
    console.log(id);
    
  }
}
