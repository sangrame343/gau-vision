import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent {
  message:string="";
  isProcess:boolean=false;
  className="d-none";
signUpForm!:FormGroup;
constructor(private formB: FormBuilder ,private auth:AuthService){
  this.signUpForm=this.formB.group({
    'email':['',Validators.required],
    'phone':['',Validators.required],
    'password':['',Validators.required]
  })
}
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  
}
signUp(){
  this.isProcess=true;
  const data=this.signUpForm.value;
  delete data['confirm']
  this.auth.signUp(data).subscribe(res=>{
   if(res.success){
    this.isProcess=false;
    this.message="Account has been Created Successfully"
    this.className='alert alert-success'
   }else{
    this.isProcess=false;
    this.message=res.message
    this.className='alert alert-danger'
   }
   // alert("User register successfull")
    //to reset all the input form  field
    //this.signUpForm.reset();
  },err=>{
    this.isProcess=false;
    this.message="server error"
    this.className='alert alert-danger'
  })
}
}
