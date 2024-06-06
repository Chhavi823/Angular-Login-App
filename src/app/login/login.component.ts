import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(private router: Router) { }

  login(): void {
    if (this.username === 'admin' && this.password === 'password') {

      localStorage.setItem('currentUser', JSON.stringify({ username: this.username }));

      console.log('Login successful');
      this.router.navigate(['/user-list']);
    } else {

      this.loginFailed = true;
      console.log('Invalid username or password');
    }
  }


}
