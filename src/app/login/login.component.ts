import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login(): void {
    this.router.navigate(['/board']);
  }
}
