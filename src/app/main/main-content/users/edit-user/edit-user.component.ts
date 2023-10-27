import { Component } from '@angular/core';
import { UserServiceService } from 'src/app/user-service.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


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
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {
  userData: Array<user>
  user: user | undefined;
  editUserForm: FormGroup;
  
  constructor(private userService: UserServiceService, private activatedRoute: ActivatedRoute, private router: Router){
    this.userData = userService.userList;
    activatedRoute.params.subscribe((params) => {
      console.log(params+"  "+params['id']);
      this.user = this.userData.find((ele) => ele.id == params['id']);
    });
    this.editUserForm = new FormGroup({
      'fullName': new FormControl(this.user?.fullName, [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
      'emailID': new FormControl(this.user?.emailID, [Validators.required, Validators.minLength(3), Validators.maxLength(35)]),
      'gender': new FormControl(this.user?.gender),
      'contactNo': new FormControl(this.user?.contactNo)
    });

  }

  editUser(){
    if(!this.editUserForm.valid){
      alert("invalid submission");
      return;
    }
    console.log("editing");
    this.userService.editUser(this.editUserForm.value, this.user?.id);
    this.router.navigate(['/users']);
  }
}
