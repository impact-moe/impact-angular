export class RefreshToken {
  Token: string;
  Expires: Date;
  Created: Date;
  IpAddress: Date;

  constructor(refreshTokenJson: any) {
    this.Token = refreshTokenJson.token;
    this.Expires = refreshTokenJson.expires;
    this.Created = refreshTokenJson.created;
    this.IpAddress = refreshTokenJson.ipAddress;
  }
}
