import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
// import { HttpClient, HttpErrorResponse } from '@angular/common/http';
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
  public listingsUrl: string = `${environment.baseUrl}/listings`;
  private authToken = 'ea7adc907c971e8f277ad6841dc5331fcb3ae567fe25aef1c51f4eb0c1be2681';
  private headers: Headers = new Headers({ 'Accept-Version': '3.0' });
  private options: RequestOptions = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) {
    super();
  }

  public getListings(filterObject): Observable<Listing[]> {
    const options = new RequestOptions({ headers: this.headers });
    options.params = super.encodeUrlParams(filterObject);
    return this.http.get(this.listingsUrl, options)
      .map(super.extractData)
      .catch(super.handleError);
  }

}
