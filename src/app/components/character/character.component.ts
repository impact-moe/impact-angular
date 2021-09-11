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
  character?: Character;
  pageId = 'overview';

  // Constellation Objects
  constellationOne?: Constellation;
  constellationTwo?: Constellation;
  constellationThree?: Constellation;
  constellationFour?: Constellation;
  constellationFive?: Constellation;
  constellationSix?: Constellation;

  // Talent Objects
  normalTalent?: Talent;
  passiveOneTalent?: Talent;
  passiveTwoTalent?: Talent;
  passiveThreeTalent?: Talent;
  elementalSkillTalent?: Talent;
  elementalBurstTalent?: Talent;

  constructor(
    private route: ActivatedRoute,
    private impactService: ImpactService,
    public utilityService: UtilityService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (!params.characterId) return;

      if (!params.pageId || params.pageId === 'overview') {
        this.impactService
          .getCharacter(params.characterId, 'overview')
          .subscribe(data1 => {
            this.character = data1;

            this.impactService
              .getCharacterRoles(params.characterId, 'weapon,artifactset')
              .subscribe(data2 => {
                if (this.character) this.character.Roles = data2;
              });

            this.pageId = params.pageId;
          });
      } else if (params.pageId === 'talents') {
        this.impactService
          .getCharacter(params.characterId, 'talents')
          .subscribe(data => {
            this.character = data;

            this.normalTalent = this.utilityService.getTalentByType(
              'normal',
              this.character.Talents
            );
            this.passiveOneTalent = this.utilityService.getTalentByType(
              'passive-one',
              this.character.Talents
            );
            this.passiveTwoTalent = this.utilityService.getTalentByType(
              'passive-two',
              this.character.Talents
            );
            this.passiveThreeTalent = this.utilityService.getTalentByType(
              'passive-three',
              this.character.Talents
            );
            this.elementalSkillTalent = this.utilityService.getTalentByType(
              'elemental-skill',
              this.character.Talents
            );
            this.elementalBurstTalent = this.utilityService.getTalentByType(
              'elemental-burst',
              this.character.Talents
            );

            this.pageId = params.pageId;
          });
      } else if (params.pageId === 'constellations') {
        this.impactService
          .getCharacter(params.characterId, 'constellations')
          .subscribe(data => {
            this.character = data;

            this.constellationOne = this.character.Constellations[0];
            this.constellationTwo = this.character.Constellations[1];
            this.constellationThree = this.character.Constellations[2];
            this.constellationFour = this.character.Constellations[3];
            this.constellationFive = this.character.Constellations[4];
            this.constellationSix = this.character.Constellations[5];

            this.pageId = params.pageId;
          });
      }
    });
  }
}
