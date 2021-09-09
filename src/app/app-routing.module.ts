import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { CharacterComponent } from './components/character/character.component';
import { WeaponListComponent } from './components/weapon-list/weapon-list.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { ArtifactListComponent } from './components/artifact-list/artifact-list.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { WeaponComponent } from './components/weapon/weapon.component';
import { ArtifactComponent } from './components/artifact/artifact.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'character-list',
    redirectTo: 'character-list/element',
    pathMatch: 'full',
  },
  {
    path: 'character-list/:groupType',
    component: CharacterListComponent,
    pathMatch: 'full',
  },
  {
    path: 'character/:characterId',
    redirectTo: 'characters/:characterId/overview',
    pathMatch: 'full',
  },
  {
    path: 'characters/:characterId',
    redirectTo: 'characters/:characterId/overview',
    pathMatch: 'full',
  },
  {
    path: 'characters/:characterId/:pageId',
    component: CharacterComponent,
    pathMatch: 'full',
  },
  { path: 'weapon-list', component: WeaponListComponent, pathMatch: 'full' },
  {
    path: 'artifact-list',
    component: ArtifactListComponent,
    pathMatch: 'full',
  },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'signup', component: SignupComponent, pathMatch: 'full' },
  { path: 'statistics', component: StatisticsComponent, pathMatch: 'full' },
  {
    path: 'weapon/:weaponId',
    redirectTo: 'weapons/:weaponId',
    pathMatch: 'full',
  },
  {
    path: 'weapons/:weaponId',
    component: WeaponComponent,
  },
  {
    path: 'artifact/:artifactId',
    redirectTo: 'artifacts/:artifactId/overview',
    pathMatch: 'full',
  },
  {
    path: 'artifacts/:artifactId',
    redirectTo: 'artifacts/:artifactId/overview',
    pathMatch: 'full',
  },
  {
    path: 'artifacts/:artifactId/:pageId',
    component: ArtifactComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
