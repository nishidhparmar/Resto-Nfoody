import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { MenuComponent } from './menu/menu.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule } from "@angular/forms";
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { AdminmenuComponent } from './adminmenu/adminmenu.component';
import { EdititemComponent } from './edititem/edititem.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardComponent,
    MenuComponent,
    AdminComponent,
    CartComponent,
    LoginComponent,
    AdminmenuComponent,
    EdititemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
