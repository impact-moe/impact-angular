export class User {
  UserName: string;
  DisplayImage: string;

  constructor(userJson: any) {
    this.UserName = userJson.userName;
    this.DisplayImage = userJson.displayImage;
  }
}
