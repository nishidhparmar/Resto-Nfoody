import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(private api: ApiService) {}
  cardData: any = [];
  price = 0;
  obj: any = {};
  pay:any=""
  ngOnInit(): void {
    this.api.userdetails().subscribe((data) => {
      this.cardData = data;
      this.price = 0;
      if (this.cardData.length == 0) {
        this.price = this.cardData.length;
      } else {
        this.cardData.forEach((e: any) => {
          console.log(e.price);
          this.obj[e.id] = 1;

          this.price += e.price * this.obj[e.id];
          console.log(this.price);
        });
      }
    });
  }

  item: number = 1;
  remove(id: any) {
    console.log(id);
    this.api.deleteuseritem(id).subscribe((data) => {
      this.ngOnInit();
    });
  }
  plus(id: any, pr: any) {
    this.obj[id]++;
    console.log(this.obj);

    this.price += pr;

    console.log(id);
    this.item++;
    // this.api.userid(id).subscribe(data=>{console.log(data)})
  }
  minus(id: any, pr: any) {
    if (this.obj[id] == 1) {
      this.obj[id] = 1;
    } else {
      this.obj[id]--;
      this.price -= pr;
    }
  }
  payorder(){
    this.pay="Your Order Is Placed Somewhere On Earth" 
  }
}
