import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
} from 'angularx-social-login';
import { AuthenticationGuard } from './guards';
import { ApiPersistenceService, AuthenticationService } from './services';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    SocialLoginModule,
    HttpClientModule,
  ],
  providers: [
    ApiPersistenceService,
    AuthenticationGuard,
    AuthenticationService,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: AuthServiceConfig,
      useFactory: () =>
        new AuthServiceConfig([
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '964038706357-d5tmtmk0ma2eths7potldvtpsr0s0n95.apps.googleusercontent.com',
              {
                scope: 'profile email',
              },
            ),
          },
        ]),
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
