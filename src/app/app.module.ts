import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { CharacterComponent } from './components/character/character.component';
import { WeaponListComponent } from './components/weapon-list/weapon-list.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { ArtifactListComponent } from './components/artifact-list/artifact-list.component';
import { DropdownContentCardComponent } from 'src/app/components/dropdown-content-card/dropdown-content-card.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { FooterComponent } from './components/footer/footer.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { ArtifactComponent } from './components/artifact/artifact.component';
import { WeaponComponent } from './components/weapon/weapon.component';

import { ImpactService } from './services/impact.service';
import { UtilityService } from './services/utility.service';

import { LinkHandlerDirective } from './directives/link-handler/link-handler.directive';

import { AppRoutingModule } from './app-routing.module';

const baseUrlProvider = {
  provide: 'BASE_URL',
  useFactory: () => document.getElementsByTagName('base')[0].href,
  deps: []
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    CharacterComponent,
    CharacterListComponent,
    WeaponListComponent,
    ArtifactListComponent,
    DropdownContentCardComponent,
    LoginComponent,
    SignupComponent,
    FooterComponent,
    StatisticsComponent,
    WeaponComponent,
    ArtifactComponent,
    LinkHandlerDirective,
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
