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

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
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

}
