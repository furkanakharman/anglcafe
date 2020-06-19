import {ApiconnService} from '../../service/apiconn.service'
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormsModule, FormGroup, FormControl,ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
@Component({
  selector: 'app-customer',
  template: `
  <div [innerHtml]="customerHtml"></div>
  `,
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
tables: Array<any>;
customer;
customerHtml:SafeHtml;

  constructor(private apiconn: ApiconnService,private router: Router,private sanitizer:DomSanitizer) { }

  
  loginForm=new FormGroup({
    name: new FormControl(),
    fktablenumber: new FormControl()
  });

  ngOnInit(): void {
   
  }
   async createCustomer(){
    let formObject = this.loginForm.getRawValue();
    let serializedForm = JSON.stringify(formObject);
    console.log("the entered data: ",serializedForm);
   this.customer = await this.apiconn.createCustomer(serializedForm).toPromise();//.subscribe(data =>{this.customer=JSON.stringify(data)});
    console.log("customer: ",this.customer.body);
    this.customerHtml = this.sanitizer.bypassSecurityTrustHtml('<p>Customer Name: '+this.customer.body.name+' - Table: '+this.customer.body.fktablenumber+' - OrderId: '+this.customer.body.orderId+'</p>');
  }
  goMenu(){
    this.apiconn.customer=this.customer
    this.router.navigateByUrl('/menu');
  }
  clickMe(){
    this.apiconn.getTables().subscribe(data=>{
      this.tables = data;
    });
  
  }

}
