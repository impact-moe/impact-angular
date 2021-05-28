import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpClient,
} from '@angular/common/http';
import { UserService } from '@/services/user.service';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, filter, take, switchMap, tap } from 'rxjs/operators';

import { AuthResponse } from '@/models/auth/auth-response.model';
import { AuthService } from '@/services/auth.service';

@Injectable()
export class HttpAuthInterceptor implements HttpInterceptor {
  private authService?: AuthService;
  private isRefreshing = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(
    null
  );

  constructor(private injector: Injector) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.authService = this.injector.get(AuthService);

    const token = this.authService.getToken();

    if (token) request = this.addToken(request, token);

    return next.handle(request).pipe(
      catchError((error) => {
        if (error instanceof HttpErrorResponse && error.status === 401) {
          return this.handle401Error(request, next);
        } else {
          return throwError(error);
        }
      })
    );
  }

  private addToken(request: HttpRequest<any>, token: string) {
    return request.clone({
      setHeaders: {
        'Authorization': `Bearer ${token}`,
      },
    });
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);

      this.authService = this.injector.get(AuthService);

      return this.authService.refreshToken().pipe(
        switchMap((authResponse: any) => {
          this.isRefreshing = false;

          this.refreshTokenSubject.next(authResponse.Token);
          return next.handle(this.addToken(request, authResponse.Token));
        })
      );
    } else {
      return this.refreshTokenSubject.pipe(
        take(1),
        switchMap((authResponse: any) =>
          next.handle(this.addToken(request, authResponse.Token))
        )
      );
    }
  }
}
