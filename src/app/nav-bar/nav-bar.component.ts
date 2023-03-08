import { Component, OnInit } from '@angular/core';
import{faTachometerAlt} from '@fortawesome/free-solid-svg-icons'
import{faContactBook} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  faTachometerAlt
  loggedinUser: string;
  constructor() { }

  ngOnInit() {
  }

  loggedin() {
    this.loggedinUser = localStorage.getItem('token');
    return this.loggedinUser;
  }

  onLogout() {
    localStorage.removeItem('token');
    // localStorage.removeItem('userName');
    // this.alertify.success('You are logged out !');
  }

}
