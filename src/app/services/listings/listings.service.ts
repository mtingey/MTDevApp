import { Injectable } from '@angular/core';
// import { Http, RequestOptions, Headers,  } from '@angular/http';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Listing } from '../../models/listing';
import { BaseService } from '../base.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';

@Injectable()

export class ListingsService extends BaseService {
  // public listingsUrl: string = `${environment.baseUrl}/listings`;
  public listingsUrl: string = `${environment.baseUrl}/listings?query=albert%20lee%20hh`;
  private authToken = new HttpHeaders().set('Authorization', 'ea7adc907c971e8f277ad6841dc5331fcb3ae567fe25aef1c51f4eb0c1be2681');
  private options = {};
  // private queryString = '?query=albert%20lee%20hh';

  constructor(private http: HttpClient) {
    super();
  }

  public getListings(): Observable<Listing[]> {
    // this.options['params'] = new HttpParams().set('Accept-Version', '3.0').append('Content-Type', 'application/json');
    this.options['headers'] = new HttpHeaders()
                                  .set('Accept-Version', '3.0')
                                  .append('Content-Type', 'application/json')
                                  .append('Authorization', 'ea7adc907c971e8f277ad6841dc5331fcb3ae567fe25aef1c51f4eb0c1be2681');
    return this.http.get(this.listingsUrl, this.options)
      .map(super.extractData)
      .catch(super.handleError);
  }

}
