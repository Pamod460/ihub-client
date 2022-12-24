import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ItemVeiwComponent} from "./veiws/main-window/item-veiw/item-veiw.component";
import {LoginComponent} from "./veiws/login/login.component";
import {SignupComponent} from "./veiws/signup/signup.component";
import {MainWindowComponent} from "./veiws/main-window/main-window.component";
import {ItemDetailVeiwComponent} from "./veiws/main-window/item-detail-veiw/item-detail-veiw.component";

export const routes: Routes = [
  {path: 'items', component: ItemVeiwComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'mainWindow', component: MainWindowComponent},
  {path: 'itemDetail/:id', component: ItemDetailVeiwComponent},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    // RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
  getRouts(){
    // @ts-ignore
    return super.routes;
  }

}


