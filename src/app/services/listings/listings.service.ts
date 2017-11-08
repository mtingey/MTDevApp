import { Injectable } from '@angular/core';
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
  public listingsUrl: string = `${environment.baseUrl}/listings`;
  private authToken = new HttpHeaders().set('Authorization', 'ea7adc907c971e8f277ad6841dc5331fcb3ae567fe25aef1c51f4eb0c1be2681');
  private options = {};

  constructor(private http: HttpClient) {
    super();
  }

  public getListings(searchString): Observable<Listing[]> {
    this.listingsUrl = this.listingsUrl.concat('?query=', searchString);
    console.log(this.listingsUrl);
    this.options['headers'] = new HttpHeaders()
                                  .set('Accept-Version', '3.0')
                                  .append('Content-Type', 'application/json')
                                  .append('Authorization', 'ea7adc907c971e8f277ad6841dc5331fcb3ae567fe25aef1c51f4eb0c1be2681');
    return this.http.get(this.listingsUrl, this.options)
      .map(super.extractData)
      .catch(super.handleError);

  }

  resetListingsUrl() {
    this.listingsUrl = `${environment.baseUrl}/listings`;
  }

}
