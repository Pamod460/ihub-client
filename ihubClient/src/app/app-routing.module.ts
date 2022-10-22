import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ItemVeiwComponent} from "./veiws/main-window/item-veiw/item-veiw.component";
import {LoginComponent} from "./veiws/login/login.component";
import {SignupComponent} from "./veiws/signup/signup.component";

const routes: Routes = [
  {path: 'items', component: ItemVeiwComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
