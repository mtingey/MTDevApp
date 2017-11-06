import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';
import { Response, URLSearchParams } from '@angular/http';

@Injectable()
export class BaseService {
    public extractData(res: Response): any {
        let body: Object;
        if (res.text()) {
            body = res.json();
        }
        return body || {};
    }

    public handleError(error: Response | any): Observable<any> {
        let errMsg: string;
        if (error instanceof Response) {
            // redirect unauthorized errors to not-authorized page
            if (error.status === 401 || error.status === 403) {
                // ignore authorization issues - handled externally in the auth service
                return Observable.of();
            }

            const body: any = error.json() || '';
            const err: string = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        throw new Error(errMsg);
    }

    public encodeUrlParams(filterObject): URLSearchParams {
        const params = new URLSearchParams();
        const keys = Object.keys(filterObject);
        for (const key of keys) {
            params.set(key, filterObject[key]);
        }
        return params;
    }
}
