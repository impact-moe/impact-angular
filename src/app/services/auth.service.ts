import { AuthResponse } from '@/models/auth/auth-response.model';
import { SocialAuth } from '@/models/auth/social-auth.model';
import { User } from '@/models/user.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, isDevMode } from '@angular/core';
import { Router } from '@angular/router';
import {
  GoogleLoginProvider,
  SocialAuthService,
  SocialUser,
} from 'angularx-social-login';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError, mapTo, tap } from 'rxjs/operators';

import { JwtHelperService } from '@auth0/angular-jwt';
import { RefreshToken } from '@/models/auth/refresh-token.model';
const jwtHelper = new JwtHelperService();

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl;

  constructor(
    private httpClient: HttpClient,
    private socialAuthService: SocialAuthService
  ) {
    if (isDevMode()) {
      this.apiUrl = 'http://localhost:5000/api/';
    } else {
      this.apiUrl = 'https://impact.moe/api/';
    }
  }

  loginGoogle(): Promise<SocialUser> {
    return this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  logout() {
    this.revokeToken();

    localStorage.clear();
  }

  validateSocialAuth(socialUser: SocialUser): Observable<AuthResponse> {
    return this.httpClient
      .post(
        this.apiUrl + 'users/login',
        new SocialAuth(socialUser.provider, socialUser.idToken)
      )
      .pipe(map((res) => new AuthResponse(res)));
  }

  updateUser(user: User) {
    return this.httpClient
      .post(this.apiUrl + 'users/updateuser', user)
      .pipe(map((res) => new User(res)));
  }

  refreshToken() {
    return this.httpClient
      .post(this.apiUrl + 'users/refreshtoken', this.getRefreshToken())
      .pipe(
        map((res) => new AuthResponse(res)),
        tap((authResponse) => this.setAuthResponseTokens(authResponse))
      );
  }

  revokeToken() {
    this.httpClient.post(this.apiUrl + 'users/revoketoken', {
      refreshToken: this.getRefreshToken(),
    });
  }

  getToken() {
    return localStorage.getItem('token');
  }

  getRefreshToken() {
    const refreshTokenString = localStorage.getItem('refreshToken');

    if (refreshTokenString) return JSON.parse(refreshTokenString);

    return null;
  }

  setAuthResponseTokens(authResponse: AuthResponse) {
    localStorage.setItem('token', authResponse.Token);
    localStorage.setItem(
      'refreshToken',
      JSON.stringify(authResponse.RefreshToken)
    );
  }
}
