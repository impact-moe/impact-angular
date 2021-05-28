import { Component } from '@angular/core';
import { AuthService } from '@/services/auth.service';
import { UserService } from '@/services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    private userService: UserService,
    private authService: AuthService
  ) {}

  loginGoogle() {
    this.authService.loginGoogle().then((socialUser) => {
      this.authService
        .validateSocialAuth(socialUser)
        .subscribe((authResponse) => {
          this.authService.setAuthResponseTokens(authResponse);

          this.userService.setCurrentUserStorage({
            UserName: authResponse.UserName,
            DisplayImage: authResponse.DisplayImage,
          });
        });
    });
  }

  loginFacebook() {
    if (this.userService.currentUser)
      this.authService
        .updateUser(this.userService.currentUser)
        .subscribe((res) => {
          console.log(res);
        });
  }

  loginDiscord() {}
}
