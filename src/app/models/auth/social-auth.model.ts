export class SocialAuth {
  Provider: string;
  IdToken: string;

  constructor(provider: string, idToken: string) {
    this.Provider = provider;
    this.IdToken = idToken;
  }
}
