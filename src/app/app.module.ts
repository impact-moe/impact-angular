import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ArtifactComponent } from './components/artifact/artifact.component';
import { ArtifactListComponent } from './components/artifact-list/artifact-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CharacterComponent } from './components/character/character.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { DropdownContentCardComponent } from './components/dropdown-content-card/dropdown-content-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ImpactService } from './services/impact.service';
import { LinkHandlerDirective } from './directives/link-handler/link-handler.directive';
import { LoadingImageComponent } from './components/loading-image/loading-image.component';
import { LoginComponent } from './components/login/login.component';
import { MoeRarityComponent } from './components/rarity/rarity.component';
import { MultiplierPipe } from './pipes/multiplier.pipe';
import { NavComponent } from './components/nav/nav.component';
import { NgModule } from '@angular/core';
import { RouteButtonComponent } from './components/route-button/route-button.component';
import { SignupComponent } from './components/signup/signup.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { UtilityService } from './services/utility.service';
import { WeaponComponent } from './components/weapon/weapon.component';
import { WeaponListComponent } from './components/weapon-list/weapon-list.component';

const baseUrlProvider = {
  provide: 'BASE_URL',
  useFactory: () => document.getElementsByTagName('base')[0].href,
  deps: [],
};

@NgModule({
  declarations: [
    AppComponent,
    ArtifactComponent,
    ArtifactComponent,
    ArtifactListComponent,
    CharacterComponent,
    CharacterListComponent,
    DropdownContentCardComponent,
    FooterComponent,
    HomeComponent,
    LinkHandlerDirective,
    LinkHandlerDirective,
    LoadingImageComponent,
    LoginComponent,
    MoeRarityComponent,
    MultiplierPipe,
    NavComponent,
    RouteButtonComponent,
    RouteButtonComponent,
    SignupComponent,
    StatisticsComponent,
    WeaponComponent,
    WeaponListComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
  ],
  providers: [ImpactService, UtilityService, baseUrlProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
