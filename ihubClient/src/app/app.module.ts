import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemVeiwComponent } from './veiws/main-window/item-veiw/item-veiw.component';
import { LoginComponent } from './veiws/login/login.component';
import { MainWindowComponent } from './veiws/main-window/main-window.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemVeiwComponent,
    LoginComponent,
    MainWindowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
