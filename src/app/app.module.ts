import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainmenuComponent } from './components/mainmenu/mainmenu.component';
import { CustomerComponent } from './components/customer/customer.component';
import { ServerComponent } from './components/server/server.component';
import { KitchenComponent } from './components/kitchen/kitchen.component';
import { ManagerComponent } from './components/manager/manager.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import {MatListModule } from '@angular/material/list';
import {MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule, FormGroup, FormControl,ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './components/menu/menu.component';
import { MenuitemsComponent } from './components/menuitems/menuitems.component';

@NgModule({
  declarations: [
    AppComponent,
    MainmenuComponent,
    CustomerComponent,
    ServerComponent,
    KitchenComponent,
    ManagerComponent,
    MenuComponent,
    MenuitemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
