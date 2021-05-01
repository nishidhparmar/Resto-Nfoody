import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute ,Router } from '@angular/router';
@Component({
  selector: 'app-edititem',
  templateUrl: './edititem.component.html',
  styleUrls: ['./edititem.component.css'],
})
export class EdititemComponent implements OnInit {
  alert = false;
  cardData: any = []
  id:any=""
  constructor(private api: ApiService, private route: ActivatedRoute ,private router:Router) {}

  ngOnInit(): void {
    
    this.id=this.route.snapshot.params.id
     
    this.api
      .getedititem(this.id)
      .subscribe((data) => { this.cardData=data
        
       });
  }
  edititem(editfood: NgForm) {
    // console.log(this.route.snapshot.params.id);
    console.log(this.id);
    
    this.api.updateitem(this.id,editfood.value).subscribe(data=>data)
    console.log(editfood.value);
    editfood.reset();
    setTimeout(() => {
    this.router.navigateByUrl('/adminmenu');
      
    }, 1000);
    this.alert = true;
  }
}
