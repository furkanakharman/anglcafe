import { Component, OnInit } from '@angular/core';
import { ApiconnService } from 'src/app/service/apiconn.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  customer;
  menuCategories: Array<any>;
  constructor(private apiconn: ApiconnService) { }
 
  async getMenuCat(){
    this.menuCategories = await this.apiconn.getMenuCategories().toPromise();/*.subscribe(data=>{
      this.menuCategories = data;
    });*/
    console.log(this.menuCategories);
  }
  ngOnInit(): void {
  this.customer=this.apiconn.customer;
  console.log(this.customer.body);
  this.getMenuCat();  
  }

}
