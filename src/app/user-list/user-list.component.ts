import { Component } from '@angular/core';
import { User } from '../User';
// import { UserService } from '../user.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  users: User[] = [
    { id: 1, name: 'John Doe', phone: '123-456-7890', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', phone: '456-789-0123', email: 'jane@example.com' },
  ]

  // constructor(private userService: UserService) {

  // }

  // ngOnInit(): void {
  //   this.userService.getUsers().subscribe(users => {
  //     this.users = users;
  //   });
  // }

}
