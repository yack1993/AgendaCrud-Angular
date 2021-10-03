import { catchError, map, take } from 'rxjs/operators';
import { Schedule } from './phonebook.model';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import axios from 'axios'

//var httpOptions = {headers: new HttpHeaders({"Content-Type": "application/json"})};

@Injectable({
  providedIn: 'root'
})
export class PhonebookService {

  baseUrl = "http://localhost:8080/api/Schedule";


  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }

  create(schedule: Schedule): Observable<Schedule> {
    return this.http.post<Schedule>(this.baseUrl, schedule).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  getAgendas(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/All`).pipe(
      map((data) => data),
      catchError(e => this.errorHandler(e))
    );
  }

  readById(id: string): Observable<any> {
    const url = `${this.baseUrl}?${"id"}=${id}`
    return this.http.get<any>(url).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  update(schedule: Schedule): Observable<any> {
    debugger
    const url = `${this.baseUrl}?${"id"}=${schedule.id}`
    return this.http.put<any>(url, schedule).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  delete(id: number): Observable<any> {
    const url = `${this.baseUrl}?${"id"}=${id}`
    return this.http.delete<any>(url).pipe(
      map((obj)=> obj),
      catchError(e => this.errorHandler(e))
    )
  }


  errorHandler(e: any): Observable<any>{
    this.showMessage('Erro!', true)
    return EMPTY
  }

}
