import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from 'src/app/user-service.service';

interface Address{
  addressName?: string
  addressLine1: string,
  addressLine2: string,
  city: string,
  state: string,
  country: string,
  pincode: number
}

interface user{
  id?: number,
  fullName: string,
  emailID: string,
  gender: string,
  profilePicture?: string,
  contactNo?: string,
  SavedAddress?: Array<Address>
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  toDelete: boolean = false;
  userData: Array<user>;
  user: user | undefined;
  constructor(private userService: UserServiceService, private activatedRoute: ActivatedRoute, private router: Router){
    this.userData = userService.userList;
    activatedRoute.params.subscribe((params) => {
      console.log(params+"  "+params['id']);
      this.user = this.userData.find((ele) => ele.id == params['id']);
    });
  }

  deleteUser(){
    this.userService.deleteUser(this.user?.id!);
    this.router.navigate(["/users"]);
  }
}
