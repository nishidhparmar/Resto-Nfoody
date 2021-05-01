import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-adminmenu',
  templateUrl: './adminmenu.component.html',
  styleUrls: ['./adminmenu.component.css']
})
export class AdminmenuComponent implements OnInit {

  constructor(private api : ApiService) {
    
   }
  cardData:any=[]
  ngOnInit(): void {
    this.api.cardDetail().subscribe(data=>{this.cardData=data})
    this.reload()
  }
  
  reload(){
    setInterval(()=>{
    },10)
  }
  deleteitem(id:any){
  this.api.deleteitem(id).subscribe(data=>{data
    this.ngOnInit()})    
  }

}
