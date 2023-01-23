import { IfStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterStateSnapshot } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  //   name:any = "";
  //  email:any = "";
  //   Mob:any = "";
  //   USers:any = "";
   posting = false;
  formgroup:any = "";
  id:any;
  


  constructor(private api:ApiService, private router:Router, private rout:ActivatedRoute){

  }
 
   ngOnInit(...args: []): void {
    this.formgroup = new FormGroup({
      name: new FormControl("",Validators.required),
      email: new FormControl("",Validators.compose([Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")])),
      Mob: new FormControl("",Validators.compose([Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])),

    });

    this.id = this.rout.snapshot.params["id"];
    if(this.id != undefined){
      this.api.get("https://63c8e515904f040a965210a5.mockapi.io/api/v1/admin/" + this.id).subscribe((result:any)=>{
      
        this.formgroup = new FormGroup({
          name: new FormControl(result.name,Validators.required),
          email: new FormControl(result.email,Validators.compose([Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")])),
          Mob: new FormControl(result.Mob,Validators.compose([Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])),
    
        });
        
  
     
        

    })

    }
    
    
  }


  // submit(){
  //         this.posting = true;
  //      let data = {name:this.name, email:this.email, mob:this.Mob};
  //      this.api.post("https://63c8e515904f040a965210a5.mockapi.io/api/v1/admin",data).subscribe((result)=>{
  
     
        

  //      })
  // }
  submit(data:any){
    this.posting = true;
    //     this.posting = true;
    //  let deta = {name:this.name, email:this.email, mob:this.Mob};

    if(this.id == undefined){
       this.api.post("https://63c8e515904f040a965210a5.mockapi.io/api/v1/admin", data).subscribe((result)=>{
        this.router.navigate(['']);  
    });
  }
  else{
    this.api.put("https://63c8e515904f040a965210a5.mockapi.io/api/v1/admin/" + this.id, data).subscribe((result)=>{
      this.router.navigate(['']);  
  });

  }

  }

  


}


