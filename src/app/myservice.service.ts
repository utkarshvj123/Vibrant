import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {throwError} from 'rxjs';
import {retry, catchError} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class MyserviceService {

    constructor(private http: HttpClient) {
    }

    url = 'https://livescore.sportstarlive.com/api/';

    getLiveScore() {
        return this.http.get<any>(this.url + 'football/fixtures/8/widget').pipe(
            retry(1),
            catchError(this.handleError)
        );
    }

// ------------Handle error common function-----------//
    handleError(error) {
        let errorMessage = {};
        if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = {Error: error.error.message};
        } else {
            // server-side error
            errorMessage = {Message: error.message};
            // errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
    }


}
