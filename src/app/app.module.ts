import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtifactListComponent } from './components/artifact-list/artifact-list.component';
import { ArtifactComponent } from './components/artifact/artifact.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterComponent } from './components/character/character.component';
import { DropdownContentCardComponent } from './components/dropdown-content-card/dropdown-content-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoadingImageComponent } from './components/loading-image/loading-image.component';
import { LoginComponent } from './components/login/login.component';
import { NavComponent } from './components/nav/nav.component';
import { RouteButtonComponent } from './components/route-button/route-button.component';
import { SignupComponent } from './components/signup/signup.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { WeaponListComponent } from './components/weapon-list/weapon-list.component';
import { WeaponComponent } from './components/weapon/weapon.component';
import { LinkHandlerDirective } from './directives/link-handler/link-handler.directive';
import { ImpactService } from './services/impact.service';
import { UtilityService } from './services/utility.service';

const baseUrlProvider = {
  provide: 'BASE_URL',
  useFactory: () => document.getElementsByTagName('base')[0].href,
  deps: []
};

@NgModule({
  declarations: [
    AppComponent,
    ArtifactComponent,
    ArtifactListComponent,
    CharacterComponent,
    CharacterListComponent,
    DropdownContentCardComponent,
    FooterComponent,
    HomeComponent,
    LinkHandlerDirective,
    LoadingImageComponent,
    LoginComponent,
    NavComponent,
    RouteButtonComponent,
    SignupComponent,
    StatisticsComponent,
    WeaponComponent,
    WeaponListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [ImpactService, UtilityService, baseUrlProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
