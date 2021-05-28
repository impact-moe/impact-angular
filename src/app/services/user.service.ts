import { AuthResponse } from "@/models/auth/auth-response.model";
import { SocialAuth } from "@/models/auth/social-auth.model";
import { User } from "@/models/user.model";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable, isDevMode } from "@angular/core";
import { Router } from "@angular/router";
import { GoogleLoginProvider, SocialAuthService, SocialUser } from "angularx-social-login";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { catchError, mapTo, tap } from 'rxjs/operators';

import { JwtHelperService } from '@auth0/angular-jwt';
import { RefreshToken } from "@/models/auth/refresh-token.model";
import { AuthService } from "./auth.service";
const jwtHelper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser?: User;
  apiUrl;

  constructor(private httpClient: HttpClient, private authService: AuthService) {
    if (isDevMode()) {
      this.apiUrl = 'http://localhost:5000/api/';
    } else {
      this.apiUrl = 'https://impact.moe/api/';
    }

    const token = this.authService.getToken();

    if (!token)
      return;

    if (jwtHelper.isTokenExpired(token)) {
      this.authService.refreshToken()
        .subscribe(authResponse => {
          this.setCurrentUserStorage({
            UserName: authResponse.UserName,
            DisplayImage: authResponse.DisplayImage
          });
        });
    }
    else {
      this.currentUser = this.getCurrentUserStorage();
    }
  }

  getUser(userName: string) {
    return this.httpClient
      .get(this.apiUrl + 'users/' + userName)
      .pipe(map(res => new User(res)));
  }

  getCurrentUserStorage() {
    let currentUserString = localStorage.getItem('currentUser');

    if (currentUserString)
      return JSON.parse(currentUserString);

    return null;
  }

  setCurrentUserStorage(user: User) {
    this.currentUser = user;

    localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
  }
}
