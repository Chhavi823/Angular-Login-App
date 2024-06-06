import { Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { CallingHistoryComponent } from './calling-history/calling-history.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'user-list', component: UserListComponent },
    { path: 'calling-history', component: CallingHistoryComponent },
    { path: 'user-details/:id', component: UserDetailsComponent }
];
