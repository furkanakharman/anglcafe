import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ApiconnService } from 'src/app/service/apiconn.service';
@Component({
  selector: 'app-menuitems',
  templateUrl: './menuitems.component.html',
  styleUrls: ['./menuitems.component.css']
})
export class MenuitemsComponent implements OnInit {

  sub;
  id;
  menuItems: Array<any>;
  constructor(private route:ActivatedRoute,private apiconn:ApiconnService) { 
  }

  async getMenuItems(){
    this.menuItems = await this.apiconn.getMenuItems(this.id).toPromise();
    console.log(this.menuItems);
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe( params =>
      {
        this.id=params["id"]; //this is the category id, depending on the id, menuitems request will be made
      });
      console.log(this.id);
      this.getMenuItems();

  }

  //gets clicked item and sends its id to the service
  async orderItem(itemId){
   // console.log("item id : ",itemId);
   try {
   await this.apiconn.addMenuItems(itemId,this.apiconn.customer.body.orderId).toPromise(); //orderId can also be found in apiconn
   } catch (error) {
     console.log("response: ",error);
   } 
   
  }

}
