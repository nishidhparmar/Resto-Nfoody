import { Component, OnInit ,Input } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  lenght:any=""
  data:any=[]
  constructor(private api :ApiService) {
   }
    


  ngOnInit(): void {
    
    setInterval(()=>{
      this.api.userdetails().subscribe(data=>{this.data=data
        this.lenght=this.data.length
      })
    },1000)
  }
  
 

}
