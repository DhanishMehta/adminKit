import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms'

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './main/navbar/navbar.component';
import { MainContentComponent } from './main/main-content/main-content.component';
import { FooterComponent } from './main/footer/footer.component';
import { DashboardComponent } from './main/main-content/dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './main/main-content/login/login.component';
import { RegisterComponent } from './main/main-content/register/register.component';
import { UsersComponent } from './main/main-content/users/users.component';
import { ProductsComponent } from './main/main-content/products/products.component';
import { MarketComponent } from './main/main-content/market/market.component';
import { CartComponent } from './main/main-content/cart/cart.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './main/main-content/users/profile/profile.component';
import { EditUserComponent } from './main/main-content/users/edit-user/edit-user.component';
import { CreateUserComponent } from './main/main-content/users/create-user/create-user.component';
import { AllUsersComponent } from './main/main-content/users/all-users/all-users.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MainComponent,
    NavbarComponent,
    MainContentComponent,
    FooterComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    UsersComponent,
    ProductsComponent,
    MarketComponent,
    CartComponent,
    PageNotFoundComponent,
    ProfileComponent,
    EditUserComponent,
    CreateUserComponent,
    AllUsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
