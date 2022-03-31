import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/class/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = new User("nn@email", "qwerty");

  constructor() { }

  ngOnInit(): void {
  }

  enviar(user: User) {
    console.log(user);
  }

}
