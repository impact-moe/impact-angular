import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtifactCardComponent } from './components/artifact-card/artifact-card.component';
import { ArtifactChipComponent } from './components/artifact-chip/artifact-chip.component';
import { ArtifactListComponent } from './components/artifact-list/artifact-list.component';
import { ArtifactComponent } from './components/artifact/artifact.component';
import { CharacterBuildComponent } from './components/character-build/character-build.component';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterTabsComponent } from './components/character-tabs/character-tabs.component';
import { CharacterComponent } from './components/character/character.component';
import { DropdownContentCardComponent } from './components/dropdown-content-card/dropdown-content-card.component';
import { FilterSortComponent } from './components/filter-sort/filter-sort.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ItemHeaderComponent } from './components/item-header/item-header.component';
import { LoadingImageComponent } from './components/loading-image/loading-image.component';
import { LoginComponent } from './components/login/login.component';
import { NavComponent } from './components/nav/nav.component';
import { MoeRarityComponent } from './components/rarity/rarity.component';
import { RouteButtonComponent } from './components/route-button/route-button.component';
import { SignupComponent } from './components/signup/signup.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { WeaponCardComponent } from './components/weapon-card/weapon-card.component';
import { WeaponChipComponent } from './components/weapon-chip/weapon-chip.component';
import { WeaponListComponent } from './components/weapon-list/weapon-list.component';
import { WeaponComponent } from './components/weapon/weapon.component';
import { LinkHandlerDirective } from './directives/link-handler/link-handler.directive';
import { MultiplierPipe } from './pipes/multiplier.pipe';
import { ImpactService } from './services/impact.service';
import { UtilityService } from './services/utility.service';

const baseUrlProvider = {
  provide: 'BASE_URL',
  useFactory: () => document.getElementsByTagName('base')[0].href,
  deps: [],
};

@NgModule({
  declarations: [
    AppComponent,
    ArtifactCardComponent,
    ArtifactChipComponent,
    ArtifactComponent,
    ArtifactListComponent,
    CharacterBuildComponent,
    CharacterCardComponent,
    CharacterComponent,
    CharacterListComponent,
    CharacterTabsComponent,
    DropdownContentCardComponent,
    FilterSortComponent,
    FooterComponent,
    HomeComponent,
    ItemHeaderComponent,
    LinkHandlerDirective,
    LoadingImageComponent,
    LoginComponent,
    MoeRarityComponent,
    MultiplierPipe,
    NavComponent,
    RouteButtonComponent,
    SignupComponent,
    StatisticsComponent,
    WeaponCardComponent,
    WeaponChipComponent,
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
