import { EdititemComponent } from './edititem/edititem.component';
import { AdminmenuComponent } from './adminmenu/adminmenu.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { AdminComponent } from './admin/admin.component';
import { MenuComponent } from './menu/menu.component';
import { CardComponent } from './card/card.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"",redirectTo:"/menu",pathMatch:"full"},
  {path:"menu",component:CardComponent},
  {path:"admin",component:AdminComponent},
  {path:"cart",component:CartComponent},
  {path:"login",component:LoginComponent},
  {path:"adminmenu",component:AdminmenuComponent},
  {path:"edit/:id",component:EdititemComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
