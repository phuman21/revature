import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { StoreComponent } from './store/store.component';

const routes: Routes = [
  { path: "login", component: LoginComponent},
  { path: "store", component: StoreComponent},
  { path: "cart", component: CartComponent},
  { path: "", redirectTo: "/login", pathMatch: "full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
