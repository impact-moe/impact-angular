import { Injectable, Inject, isDevMode } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '@/models/character.model';
import { map } from 'rxjs/operators';
import { Weapon } from '@/models/weapon.model';
import { Artifact } from '@/models/artifact.model';
import { Role } from '@/models/role.model';

@Injectable({
  providedIn: 'root',
})
export class ImpactService {
  apiUrl;

  constructor(private httpClient: HttpClient) {
    if (isDevMode()) {
      this.apiUrl = 'http://localhost:5000/api/';
    } else {
      this.apiUrl = 'https://impact.moe/api/';
    }
  }

  getCharacter(id: string, expand?: string): Observable<Character> {
    const characterApiUrl = this.apiUrl + 'characters/' + id.toLowerCase();

    let httpParams: HttpParams = new HttpParams();

    if (expand) {
      httpParams = httpParams.append('expand', expand);
    }

    return this.httpClient
      .get(characterApiUrl, { params: httpParams })
      .pipe(map(res => new Character(res)));
  }

  getCharacterRoles(id: string, expand?: string): Observable<Array<Role>> {
    const characterApiUrl =
      this.apiUrl + 'characters/' + id.toLowerCase() + '/roles';

    let httpParams: HttpParams = new HttpParams();

    if (expand) {
      httpParams = httpParams.append('expand', expand);
    }

    return this.httpClient
      .get<Array<Role>>(characterApiUrl, { params: httpParams })
      .pipe(map((res: Array<Role>) => res.map(obj => new Role(obj))));
  }

  getCharacters(expand?: string): Observable<Array<Character>> {
    const characterApiUrl = this.apiUrl + 'characters';

    let httpParams: HttpParams = new HttpParams();

    if (expand) {
      httpParams = httpParams.append('expand', expand);
    }

    return this.httpClient
      .get<Array<Character>>(characterApiUrl, { params: httpParams })
      .pipe(map((res: Array<Character>) => res.map(obj => new Character(obj))));
  }

  getWeapon(id: string, expand?: string): Observable<Weapon> {
    const weaponApiUrl = this.apiUrl + 'weapons/' + id.toLowerCase();

    let httpParams: HttpParams = new HttpParams();

    if (expand) {
      httpParams = httpParams.append('expand', expand);
    }

    return this.httpClient
      .get(weaponApiUrl, { params: httpParams })
      .pipe(map(res => new Weapon(res)));
  }

  getWeapons(expand?: string) {
    const weaponApiUrl = this.apiUrl + 'weapons';

    let httpParams: HttpParams = new HttpParams();

    if (expand) {
      httpParams = httpParams.append('expand', expand);
    }

    return this.httpClient
      .get<Array<Weapon>>(weaponApiUrl, { params: httpParams })
      .pipe(map((res: Array<Weapon>) => res.map(obj => new Weapon(obj))));
  }

  getArtifacts() {
    const artifactApiUrl = this.apiUrl + 'artifacts';

    return this.httpClient
      .get<Array<Artifact>>(artifactApiUrl)
      .pipe(map((res: Array<Artifact>) => res.map(obj => new Artifact(obj))));
  }

  getArtifact(id: string): Observable<Artifact> {
    const artifactApiUrl = this.apiUrl + 'artifacts/' + id.toLowerCase();

    const httpParams: HttpParams = new HttpParams();

    return this.httpClient
      .get(artifactApiUrl, { params: httpParams })
      .pipe(map(res => new Artifact(res)));
  }
}
