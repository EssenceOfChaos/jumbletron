import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class WordsService {
  wordsApi = environment.dataMuseUrl;
  WAappId = environment.WAappId;
  WAbaseUrl = environment.WAbaseUrl;


  constructor(private http: HttpClient) {}
// neither function below works
  search_word(term) {
    return this.http.get(this.wordsApi + '*' + term + '*').pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  search_anagram(letters) {
    return this.http.get(this.WAbaseUrl + letters + this.WAappId).pipe(
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
