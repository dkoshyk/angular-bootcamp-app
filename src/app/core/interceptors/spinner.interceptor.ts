import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SpinnerService } from '../services/spinner.service';
import { Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {
    constructor(private spinnerService: SpinnerService) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.spinnerService.handleRequestStart();

        return next.handle(request).pipe(delay(600), map(resp => {
            this.spinnerService.handleRequestEnd();

            return resp;
        }))
    }
}