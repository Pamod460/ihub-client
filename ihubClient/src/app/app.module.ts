import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ItemVeiwComponent} from './veiws/main-window/item-veiw/item-veiw.component';
import {LoginComponent} from './veiws/login/login.component';
import {MainWindowComponent} from './veiws/main-window/main-window.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SignupComponent} from './veiws/signup/signup.component';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {HttpClientModule} from "@angular/common/http";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatIconModule} from "@angular/material/icon";
import {CommonModule} from "@angular/common";
import {MatTableModule} from "@angular/material/table";
import {CarouselModule} from "ngx-owl-carousel-o";
import {OwlModule} from "ngx-owl-carousel";


@NgModule({
  declarations: [
    AppComponent,
    ItemVeiwComponent,
    LoginComponent,
    MainWindowComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    MatSnackBarModule,
    CommonModule,
    MatSnackBarModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    CarouselModule,
    OwlModule

  ],

  exports: [
    MatSnackBarModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
