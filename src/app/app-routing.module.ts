import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './main/main-content/dashboard/dashboard.component';
import { LoginComponent } from './main/main-content/login/login.component';
import { RegisterComponent } from './main/main-content/register/register.component';
import { UsersComponent } from './main/main-content/users/users.component';
import { ProductsComponent } from './main/main-content/products/products.component';
import { MarketComponent } from './main/main-content/market/market.component';
import { CartComponent } from './main/main-content/cart/cart.component';
import { MainContentComponent } from './main/main-content/main-content.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { parseHostBindings } from '@angular/compiler';
import { ProfileComponent } from './main/main-content/users/profile/profile.component';
import { EditUserComponent } from './main/main-content/users/edit-user/edit-user.component';
import { CreateUserComponent } from './main/main-content/users/create-user/create-user.component';
import { AllUsersComponent } from './main/main-content/users/all-users/all-users.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: MainContentComponent,
        children: [
          { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
          { path: 'dashboard', component: DashboardComponent },
          {
            path: 'users',
            component: UsersComponent,
            children: [
              { path: '', component: AllUsersComponent },
              { path: 'create', component: CreateUserComponent },
              { path: ':id', component: ProfileComponent },
              { path: 'edit/:id', component: EditUserComponent },
            ],
          },
          { path: 'products', component: ProductsComponent },
          { path: 'market', component: MarketComponent },
          { path: 'cart', component: CartComponent },
        ],
      },
    ],
  },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
