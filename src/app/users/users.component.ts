import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  Users:any;


  constructor(private api:ApiService ){}



  ngOnInit(): void {
    this.lode();

   
  }
  lode(){
    this.api.get("https://63c8e515904f040a965210a5.mockapi.io/api/v1/admin").subscribe((result: any): void=>{
      this.Users = result

    })
  }
  deleteUser(id:any) {

    if (confirm("are you sure")){
 
   this.api.delete("https://63c8e515904f040a965210a5.mockapi.io/api/v1/admin/" + id).subscribe((result:any)=>{
    this.lode();
   })
  }
}

//  EditUser(id:any) {

//   if (confirm("are you sure")){
//     // console.log(id);
    

// //  this.api.put("https://63c8e515904f040a965210a5.mockapi.io/api/v1/admin" + id).subscribe((result:any)=>{
// //   this.lode();
// //  })
// }
//  }

}
  





