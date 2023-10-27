import { Component } from '@angular/core';

interface sidebarItem{
  title: string,
  icon: string,
  routerLink: string,
  isActive: boolean | undefined
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(){
    this.togglePage()
  }

  sidebarItems:Array<sidebarItem> = [
    {
      title: "Dashboard",
      icon: "bi-sliders2-vertical",
      routerLink: '/dashboard',
      isActive: true
    },
    {
      title: "Users",
      icon: "bi-person",
      routerLink: '/users',
      isActive: false
    },
    {
      title: "Login",
      icon: "bi-box-arrow-in-right",
      routerLink: '/login',
      isActive: false
    },
    {
      title: "Register",
      icon: "bi-person-add",
      routerLink: '/register',
      isActive: false
    },
    {
      title: "Products",
      icon: "bi-view-stacked",
      routerLink: '/products',
      isActive: false
    },
    {
      title: "Market",
      icon: "bi-shop",
      routerLink: '/market',
      isActive: false
    },
    {
      title: "Cart",
      icon: "bi-cart",
      routerLink: '/cart',
      isActive: false
    }
  ]

  togglePage(currRouter: string=""){
    let curr = "";
    if(currRouter == ""){
      curr = window.location.pathname;
    } else {
      curr = currRouter; 
    }
    let activeItemIndex = this.sidebarItems.findIndex(item => item.isActive === true);
    this.sidebarItems[activeItemIndex].isActive! = false;

    let newItemIndex = this.sidebarItems.findIndex(item => item.routerLink === curr);
    this.sidebarItems[newItemIndex].isActive! = true;
  }
}
