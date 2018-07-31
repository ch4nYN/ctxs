import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { User } from '../../models/user.model';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  newUser: User;
  desc: String;
  @ViewChild('closeRegisterModal') closeRegisterModal: ElementRef;

  constructor(private authService: AuthService, private router:Router) { }

  ngOnInit() {
    this.newUser = {
      username: '',
      password: '',
      repassword: '',
    };
    this.desc = '';
  }

  register(registerForm: NgForm) {
    //if passwords dont match
    if (this.newUser.password !== this.newUser.repassword) {
      console.log("passwords do not match");
      this.desc = 'the passwords do not match';
      return;
    }
    this.authService.register(this.newUser)
      .subscribe(res => {
        console.log(res);
        if (res.error) {
          this.desc = "email already in use";
          return;
        }
        //success
        this.closeRegisterModal.nativeElement.click(); //closes the register modal
    
        this.newUser = {
          username: '',
          password: '',
          repassword: '',
        };
        
      });
    
    
    
    
  }

}
