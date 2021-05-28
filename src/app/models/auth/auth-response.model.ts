import { RefreshToken } from '@/refresh-token.model';

export class AuthResponse {
  Token: string;
  RefreshToken: RefreshToken;
  UserName: string;
  DisplayImage: string;

  constructor(authResponseJson: any) {
    this.Token = authResponseJson.token;
    this.RefreshToken = authResponseJson.refreshToken;
    this.UserName = authResponseJson.userName;
    this.DisplayImage = authResponseJson.displayImage;
  }
}
