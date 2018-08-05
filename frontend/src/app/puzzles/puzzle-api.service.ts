import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { API_URL } from '../env';
import { Puzzle } from './puzzle.model';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class PuzzlessApiService {
  constructor(private http: HttpClient) {}

  // GET list of public, future events
  getPuzzles(): Observable<any> {
    return this.http.get(`${API_URL}/puzzles`).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(`Returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    return throwError('Something went wrong; please try again later.');
  }
}
