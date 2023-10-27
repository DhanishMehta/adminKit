import { Component } from '@angular/core';
import { UserServiceService } from 'src/app/user-service.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';

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
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  userData: Array<user>
  newUserForm: FormGroup;

  constructor(private userService: UserServiceService, private router: Router){
    this.userData = userService.userList;
    this.newUserForm = new FormGroup({
      'fullName': new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
      'emailID': new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(35)]),
      'gender': new FormControl(''),
      'profilePicture': new FormControl(''),
      'contactNo': new FormControl(''),
      'SavedAddress': new FormGroup({
        'addressLine1': new FormControl(''),
        'addressLine2': new FormControl(''),
        'city': new FormControl(''),
        'state': new FormControl(''),
        'country': new FormControl(''),
        'pincode': new FormControl('')
      })
    })
  }

  createUser(){
    if(!this.newUserForm.valid){
      alert("Invalid submission");
      return;
    }
    this.userService.createUser(this.newUserForm.value)
    this.newUserForm.reset();
    this.router.navigate(['/users']);
  }

}
