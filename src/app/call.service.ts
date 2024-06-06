import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Call } from './Call';

@Injectable({
  providedIn: 'root'
})
export class CallService {

  private apiUrl = 'http://api.example.com/calls';

  constructor(private http: HttpClient) { }

  getCallHistory(): Observable<Call[]> {
    return this.http.get<Call[]>(this.apiUrl);
  }
}
