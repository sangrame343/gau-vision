import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent {
  signInForm!:FormGroup

  constructor(private formB:FormBuilder,private auth:AuthService){
    this.signInForm=this.formB.group({
      'email':['',Validators.required],
      
      'password':['',Validators.required]
    })
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }
  login(){
    const data=this.signInForm.value;
    this.auth.signIn(data).subscribe((res)=>{
      if(res.success){
        localStorage.setItem('token',res.token)
        alert(res.success)
      }else{
        alert(res.message)
      }
      
    },err=>{
      alert("login failed")
    })
    
    //alert('Login Successfull')
  }
}
