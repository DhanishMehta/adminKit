import { Injectable } from '@angular/core';

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

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  constructor() { }
  userList: Array<user> = [
    {
      id: 1,
      fullName: "admin",
      emailID: "admin@admin.com",
      gender: "Male",
      profilePicture: "https://picsum.photos/200/300",
      contactNo: "+919191919191",
      SavedAddress: [
        {
          addressName: "Address 1",
          addressLine1: "texttexttexttexttext",
          addressLine2: "texttexttexttexttext",
          city: "ttexttext",
          state: "statee",
          country: "India",
          pincode: 700121
        }
      ]
    },
    {
      id: 2,
      fullName: "user2",
      emailID: "user2@admin.com",
      gender: "Female",
      profilePicture: "https://picsum.photos/200/300",
      contactNo: "+919191919191",
      SavedAddress: []
    },
    {
      id: 3,
      fullName: "user3",
      emailID: "user3@admin.com",
      gender: "Male",
      profilePicture: "https://picsum.photos/200/300",
      contactNo: "+919191919191",
      SavedAddress: []
    },
    {
      id: 4,
      fullName: "user4",
      emailID: "user4@admin.com",
      gender: "Female",
      profilePicture: "https://picsum.photos/200/300",
      contactNo: "+919191919191",
      SavedAddress: []
    },
    {
      id: 5,
      fullName: "user5",
      emailID: "user5@admin.com",
      gender: "Female",
      profilePicture: "https://picsum.photos/200/300",
      contactNo: "+919191919191",
      SavedAddress: []
    }
  ]

  createUser(newUser: user){
    newUser.id = this.userList.length + 1;
    this.userList.push(newUser);

  }

  editUser(newUser: user, userID: number | undefined){
    let index = this.userList.findIndex(ele => ele.id === userID)
    newUser.id = userID;
    newUser.SavedAddress = this.userList[index].SavedAddress;
    this.userList[index] = newUser;
  }

  deleteUser(userID: number){
    let index = this.userList.findIndex(ele => ele.id === userID);
    this.userList.splice(index, 1);
  }
}
