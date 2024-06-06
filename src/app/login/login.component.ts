import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loginFailed: boolean = false;

  constructor() { }

  login(): void {
    if (this.username === 'admin' && this.password === 'password') {

      localStorage.setItem('currentUser', JSON.stringify({ username: this.username }));

      console.log('Login successful');
    } else {

      this.loginFailed = true;
      console.log('Invalid username or password');
    }
  }
}
