import { AuthService } from './../services/auth.service';
import { ApiRestService } from './../services/api-rest.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import Auth from '@aws-amplify/auth';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  attributes: any;
  message: any;

  constructor(
    private router: Router,
    private apiRestService: ApiRestService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    if (this.authService.isAdmin()) {
      this.getMessageAdmin();
    } else {
      this.getMessageUser();
    }
  }

  onLogout(): void {
    Auth.signOut().then( () => {
      this.router.navigate(['/']);
    }).catch( err => {
      alert(err.message || JSON.stringify(err));
    })
  }

  getAttributes(): void {
    Auth.currentUserInfo().then( user => {
      this.attributes = user.attributes;
      // alert(JSON.stringify(this.attributes));
    }).catch( err => {
      alert(err.message || JSON.stringify(err));
    })
  }

  getMessageAdmin(): void {
    this.apiRestService.getMessageAdmin().subscribe( data => {
      this.message = data.message;
    },
    err => {
      alert(err.message || JSON.stringify(err));
    })
  }

  getMessageUser(): void {
    this.apiRestService.getMessageUser().subscribe( data => {
      this.message = data.message;
    },
    err => {
      alert(err.message || JSON.stringify(err));
    })
  }

}
