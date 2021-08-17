import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class HttpService {
    constructor (private httpClient: HttpClient) {}

    get(value: string): Observable<any> {
        const encodedURI  = encodeURI("https://www.googleapis.com/books/v1/volumes?q="+ value +"&maxResults=20")
        return this.httpClient.get(encodedURI)
    }
}
