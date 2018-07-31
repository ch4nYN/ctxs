import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../models/user.model';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;
  desc: String;
  @ViewChild('closeLoginModal') closeLoginModal: ElementRef;
  constructor(private authService: AuthService, private router:Router) { }

  ngOnInit() {
    this.user = {
      username:'',
      password:''
    };
    this.desc = '';
  }

  login(form: NgForm) {
    this.authService.login(this.user)
      .subscribe(res => {
        if(res.error) {
          this.desc = res.error;
          return;
        }
        this.desc = '';
        localStorage.setItem('token', res.token);
        localStorage.setItem('userId', res.userId);
        this.closeLoginModal.nativeElement.click();
        console.log("login success");
        this.router.navigateByUrl('/');
      });
  }

}
