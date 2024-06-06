import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Call } from '../Call';
import { CallService } from '../call.service';

@Component({
  selector: 'app-calling-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calling-history.component.html',
  styleUrl: './calling-history.component.css'
})
export class CallingHistoryComponent {
  callHistory: Call[] = [
    { callee: 'John Doe', dateTime: '2024-06-01 10:00 AM', duration: '10 minutes' },
    { callee: 'Jane Smith', dateTime: '2024-06-02 11:30 AM', duration: '5 minutes' },
    // Add more call objects as needed
  ];


  // constructor(private callService: CallService) { }

  // ngOnInit(): void {
  //   this.callService.getCallHistory().subscribe(callHistory => {
  //     this.callHistory = callHistory;
  //   });
  // }
}
