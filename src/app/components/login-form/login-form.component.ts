import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/class/user';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  @Input() user: User = new User();
  @Output() enviar = new EventEmitter<User>(); // emite el objeto user

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log("onSubmit!");
    this.enviar.emit(this.user);
  }

}
