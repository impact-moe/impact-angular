import { Role } from '@/models/role.model';
import { Element } from '@/enums/element.enum';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from '@/models/character.model';
import { ImpactService } from '@/services/impact.service';
import { UtilityService } from '@/services/utility.service';
import { Constellation } from 'src/app/models/constellation.model';
import { Talent } from 'src/app/models/talent.model';

export class CharacterSection<T> {
  isLoaded: boolean;
  data: Array<T>;

  constructor() {
    this.isLoaded = false;
    this.data = [];
  }

  setData(data: Array<T>) {
    this.isLoaded = true;
    this.data = data;
  }
}

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent implements OnInit {
  readonly element = Element;

  character?: Character;
  roles = new CharacterSection<Role>();
  talents = new CharacterSection<Talent>();
  constellations = new CharacterSection<Constellation>();

  pageId = 'overview';

  constructor(
    private route: ActivatedRoute,
    private impactService: ImpactService,
    public utilityService: UtilityService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (!params.characterId) return;

      if (!params.pageId || params.pageId === 'overview') {
        this.pageId = 'overview';

        if (!this.character) {
          this.impactService
            .getCharacter(params.characterId, 'overview')
            .subscribe(data => {
              this.character = data;
            });
        }

        if (!this.roles.isLoaded) {
          this.impactService
            .getCharacterRoles(params.characterId, 'weapon,artifactset')
            .subscribe(
              data => this.roles.setData(data),
              error => this.roles.setData([])
            );
        }
      } else if (params.pageId === 'talents') {
        this.pageId = params.pageId;

        if (!this.talents.isLoaded) {
          this.impactService
            .getCharacter(params.characterId, 'talents')
            .subscribe(data => {
              this.character = data;
              this.talents.setData(this.character.Talents);
            });
        }
      } else if (params.pageId === 'constellations') {
        this.pageId = params.pageId;

        if (!this.constellations.isLoaded) {
          this.impactService
            .getCharacter(params.characterId, 'constellations')
            .subscribe(data => {
              this.character = data;
              this.constellations.setData(this.character.Constellations);
            });
        }
      }
    });
  }

  get rarity(): number {
    return !!this.character ? +this.character.Rarity : 0;
  }

  isRecommended(role: Role) {
    return !!this.character && !!this.character.CharacterOverview
      ? this.character.CharacterOverview.RecommendedRole === role.Name
      : false;
  }
}
