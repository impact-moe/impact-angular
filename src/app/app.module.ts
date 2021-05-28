import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SocialLoginModule } from 'angularx-social-login';
import { GoogleChartsModule } from 'angular-google-charts';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ArtifactCardComponent } from './components/artifact-card/artifact-card.component';
import { ArtifactListComponent } from './components/artifact-list/artifact-list.component';
import { ArtifactComponent } from './components/artifact/artifact.component';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterComponent } from './components/character/character.component';
import { DropdownContentCardComponent } from './components/dropdown-content-card/dropdown-content-card.component';
import { FilterSortComponent } from './components/filter-sort/filter-sort.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoadingImageComponent } from './components/loading-image/loading-image.component';
import { LoginComponent } from './components/login/login.component';
import { NavComponent } from './components/nav/nav.component';
import { SignupComponent } from './components/signup/signup.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { WeaponCardComponent } from './components/weapon-card/weapon-card.component';
import { WeaponListComponent } from './components/weapon-list/weapon-list.component';
import { WeaponComponent } from './components/weapon/weapon.component';
import { RouteButtonComponent } from './components/route-button/route-button.component';
import { MoeRarityComponent } from './components/rarity/rarity.component';
import { ProfileComponent } from './components/profile/profile.component';

import { ImpactService } from './services/impact.service';
import { UtilityService } from './services/utility.service';

import { LinkHandlerDirective } from './directives/link-handler/link-handler.directive';
import { MultiplierPipe } from './pipes/multiplier.pipe';

import { GoogleLoginProvider } from 'angularx-social-login';

import { SocialAuthServiceConfig } from 'angularx-social-login';

import { HttpAuthInterceptor } from './interceptors/http-auth.interceptor';

const baseUrlProvider = {
  provide: 'BASE_URL',
  useFactory: () => document.getElementsByTagName('base')[0].href,
  deps: [],
};

@NgModule({
  declarations: [
    AppComponent,
    ArtifactComponent,
    ArtifactCardComponent,
    ArtifactListComponent,
    CharacterCardComponent,
    CharacterComponent,
    CharacterListComponent,
    DropdownContentCardComponent,
    FilterSortComponent,
    FooterComponent,
    HomeComponent,
    LinkHandlerDirective,
    LoadingImageComponent,
    LoginComponent,
    MoeRarityComponent,
    MultiplierPipe,
    NavComponent,
    RouteButtonComponent,
    SignupComponent,
    StatisticsComponent,
    WeaponComponent,
    WeaponCardComponent,
    WeaponListComponent,
    ArtifactComponent,
    LinkHandlerDirective,
    RouteButtonComponent,
    MoeRarityComponent,
    MultiplierPipe,
    ProfileComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SocialLoginModule,
    GoogleChartsModule,
    FormsModule,
  ],
  providers: [
    ImpactService,
    UtilityService,
    baseUrlProvider,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '125479501738-eq4n1m7oi7614kf8c6s40hqruvdjueuk.apps.googleusercontent.com'
            ),
          },
        ],
      } as SocialAuthServiceConfig,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpAuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
