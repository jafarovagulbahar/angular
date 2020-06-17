import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

const endpoint = 'http://api.weatherstack.com/current?access_key=db54ad218459e297e32c6af75f09838e&query=Baku';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    const body = res;
    return body || { };
  }

  getWeatherData(): Observable<any> {
    return this.http.get(endpoint).pipe(
      map(this.extractData));
  }
}
