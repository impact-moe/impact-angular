import { Role } from './../../models/role.model';
import { Element } from './../../enums/element.enum';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from '@/models/character.model';
import { ImpactService } from '@/services/impact.service';
import { UtilityService } from '@/services/utility.service';
import { Constellation } from 'src/app/models/constellation.model';
import { Talent } from 'src/app/models/talent.model';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent implements OnInit {
  readonly element = Element;

  character?: Character;
  roles: Array<Role> = [];
  talents: Array<Talent> = [];
  constellations: Array<Constellation> = [];

  pageId = 'overview';

  constructor(
    private route: ActivatedRoute,
    private impactService: ImpactService,
    public utilityService: UtilityService
  ) {}

  get rarity(): number {
    return !!this.character ? +this.character.Rarity : 0;
  }

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

        if (!this.roles.length) {
          this.impactService
            .getCharacterRoles(params.characterId, 'weapon,artifactset')
            .subscribe(data => {
              this.roles = data;
            });
        }
      } else if (params.pageId === 'talents') {
        this.pageId = params.pageId;

        if (!this.talents.length) {
          this.impactService
            .getCharacter(params.characterId, 'talents')
            .subscribe(data => {
              this.character = data;
              this.talents = this.character.Talents;
            });
        }
      } else if (params.pageId === 'constellations') {
        this.pageId = params.pageId;

        if (!this.constellations.length) {
          this.impactService
            .getCharacter(params.characterId, 'constellations')
            .subscribe(data => {
              this.character = data;
              this.constellations = this.character.Constellations;
            });
        }
      }
    });
  }
}
