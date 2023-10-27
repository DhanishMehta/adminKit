import { Component } from '@angular/core';
import { UserServiceService } from 'src/app/user-service.service';

interface Address{
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
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent {
  userData: Array<user>
  constructor(private userService: UserServiceService){
    this.userData = userService.userList;
  }
}
