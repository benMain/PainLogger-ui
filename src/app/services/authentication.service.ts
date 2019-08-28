import { Injectable } from '@angular/core';
import {
  AuthService,
  GoogleLoginProvider,
  SocialUser,
  LoginOpt,
} from 'angularx-social-login';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private user: SocialUser;
  private loggedIn = false;
  constructor(private authService: AuthService) {
    this.authService.authState.subscribe(user => {
      this.loggedIn = !!user;
      this.user = user;
    });
  }

  async loginGoogle(): Promise<void> {
    const options: LoginOpt = {
      client_id: '',
    };
    await this.authService.signIn(GoogleLoginProvider.PROVIDER_ID, options);
  }

  async logout(): Promise<void> {
    await this.authService.signOut();
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  getUser(): SocialUser {
    return this.user;
  }
}
