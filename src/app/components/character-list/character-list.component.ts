import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImpactService } from '../../services/impact.service';
import { UtilityService } from '../../services/utility.service';
import { Element } from '../../enums/element.enum';
import { Character } from '../../models/character.model';
import { WeaponType } from '../../enums/weapon-type.enum';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss'],
})
export class CharacterListComponent {
  listItems?: { [key: string]: any };
  groupType = '';

  constructor(
    private route: ActivatedRoute,
    private impactService: ImpactService,
    public utilityService: UtilityService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.groupType = params.groupType;

      if (this.groupType === 'element') {
        this.impactService
          .getCharacters()
          .subscribe((data: Array<Character>) => {
            this.listItems = new Array();

            this.listItems[Element.Anemo] = {
              mainImage: this.utilityService.getElementImage(Element.Anemo),
              characters: new Array<Character>(),
            };
            this.listItems[Element.Cryo] = {
              mainImage: this.utilityService.getElementImage(Element.Cryo),
              characters: new Array<Character>(),
            };
            this.listItems[Element.Electro] = {
              mainImage: this.utilityService.getElementImage(Element.Electro),
              characters: new Array<Character>(),
            };
            this.listItems[Element.Geo] = {
              mainImage: this.utilityService.getElementImage(Element.Geo),
              characters: new Array<Character>(),
            };
            this.listItems[Element.Hydro] = {
              mainImage: this.utilityService.getElementImage(Element.Hydro),
              characters: new Array<Character>(),
            };
            this.listItems[Element.Pyro] = {
              mainImage: this.utilityService.getElementImage(Element.Pyro),
              characters: new Array<Character>(),
            };

            for (let characterItem of data)
              if (this.listItems[characterItem.Element])
                this.listItems[characterItem.Element].characters.push(
                  characterItem
                );
          });
      } else if (this.groupType === 'weapon') {
        this.impactService
          .getCharacters()
          .subscribe((data: Array<Character>) => {
            this.listItems = new Array();

            this.listItems[WeaponType.Bow] = {
              mainLabel: 'Bow',
              characters: new Array<Character>(),
            };
            this.listItems[WeaponType.Catalyst] = {
              mainLabel: 'Catalyst',
              characters: new Array<Character>(),
            };
            this.listItems[WeaponType.Claymore] = {
              mainLabel: 'Claymore',
              characters: new Array<Character>(),
            };
            this.listItems[WeaponType.Polearm] = {
              mainLabel: 'Polearm',
              characters: new Array<Character>(),
            };
            this.listItems[WeaponType.Sword] = {
              mainLabel: 'Sword',
              characters: new Array<Character>(),
            };

            for (let characterItem of data)
              if (this.listItems[characterItem.Weapon])
                this.listItems[characterItem.Weapon].characters.push(
                  characterItem
                );
          });
      } else if (this.groupType === 'tier') {
        this.impactService
          .getCharacters()
          .subscribe((data: Array<Character>) => {
            this.listItems = new Array();

            this.listItems[0] = {
              mainImage: this.utilityService.getTierImage('S'),
              characters: new Array<Character>(),
            };
            this.listItems[1] = {
              mainImage: this.utilityService.getTierImage('A'),
              characters: new Array<Character>(),
            };
            this.listItems[2] = {
              mainImage: this.utilityService.getTierImage('B'),
              characters: new Array<Character>(),
            };
            this.listItems[3] = {
              mainImage: this.utilityService.getTierImage('C'),
              characters: new Array<Character>(),
            };
            this.listItems[4] = {
              mainImage: this.utilityService.getTierImage('D'),
              characters: new Array<Character>(),
            };

            for (let characterItem of data) {
              if (characterItem.Tier === 'S')
                this.listItems[0].characters.push(characterItem);
              if (characterItem.Tier === 'A')
                this.listItems[1].characters.push(characterItem);
              if (characterItem.Tier === 'B')
                this.listItems[2].characters.push(characterItem);
              if (characterItem.Tier === 'C')
                this.listItems[3].characters.push(characterItem);
              if (characterItem.Tier === 'D')
                this.listItems[4].characters.push(characterItem);
            }
          });
      }
    });
  }

  groupButtonClick() {
    if (this.groupType === 'element')
      this.router.navigate(['/character-list/weapon']);
    if (this.groupType === 'weapon')
      this.router.navigate(['/character-list/tier']);
    if (this.groupType === 'tier')
      this.router.navigate(['/character-list/element']);
  }
}
