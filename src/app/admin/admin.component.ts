import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { ApiService } from '../api.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
alert=false
  constructor(private api : ApiService) { }

  ngOnInit(): void {
  }
  addcard(addfood:NgForm){
    console.log(addfood.value);
    this.api.addcardDetail(addfood.value).subscribe(data=>data)
    addfood.reset()
    this.alert=true
  }

}
