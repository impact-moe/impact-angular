import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImpactService } from '@/services/impact.service';
import { UtilityService } from '@/services/utility.service';
import { Element } from '@/enums/element.enum';
import { Character } from '@/models/character.model';
import { WeaponType } from '@/enums/weapon-type.enum';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss'],
})
export class CharacterListComponent implements OnInit {
  private characterData: Array<Character> = [];
  private elementListItems?: { [key: string]: any };
  private weaponListItems?: { [key: string]: any };
  private tierListItems?: { [key: string]: any };

  groupType = '';

  characterItemsCollapsed = false;
  characterItemsCollapseButtonContent = 'show less';
  characterItemTitleStyle = '';
  characterItemContainerStyle = '';
  characterItemTierStyle = '';

  constructor(
    private route: ActivatedRoute,
    private impactService: ImpactService,
    public utilityService: UtilityService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.groupType = params.groupType;

      if (this.characterData.length === 0) {
        this.impactService
          .getCharacters()
          .subscribe((data: Array<Character>) => {
            this.characterData = data;
            this.formatData();
          });
      }
    });
  }

  private formatData() {
    this.formatElementList();
    this.formatWeaponList();
    this.formatTierList();
  }

  private formatElementList() {
    this.elementListItems = new Array();

    this.elementListItems[Element.Anemo] = {
      mainImage: this.utilityService.getElementImage(Element.Anemo),
      characters: new Array<Character>(),
    };
    this.elementListItems[Element.Cryo] = {
      mainImage: this.utilityService.getElementImage(Element.Cryo),
      characters: new Array<Character>(),
    };
    this.elementListItems[Element.Electro] = {
      mainImage: this.utilityService.getElementImage(Element.Electro),
      characters: new Array<Character>(),
    };
    this.elementListItems[Element.Geo] = {
      mainImage: this.utilityService.getElementImage(Element.Geo),
      characters: new Array<Character>(),
    };
    this.elementListItems[Element.Hydro] = {
      mainImage: this.utilityService.getElementImage(Element.Hydro),
      characters: new Array<Character>(),
    };
    this.elementListItems[Element.Pyro] = {
      mainImage: this.utilityService.getElementImage(Element.Pyro),
      characters: new Array<Character>(),
    };

    for (const characterItem of this.characterData) {
      if (this.elementListItems[characterItem.Element]) {
        this.elementListItems[characterItem.Element].characters.push(
          characterItem
        );
      }
    }
  }

  private formatWeaponList() {
    this.weaponListItems = new Array();

    this.weaponListItems[WeaponType.Bow] = {
      mainLabel: 'Bow',
      characters: new Array<Character>(),
    };
    this.weaponListItems[WeaponType.Catalyst] = {
      mainLabel: 'Catalyst',
      characters: new Array<Character>(),
    };
    this.weaponListItems[WeaponType.Claymore] = {
      mainLabel: 'Claymore',
      characters: new Array<Character>(),
    };
    this.weaponListItems[WeaponType.Polearm] = {
      mainLabel: 'Polearm',
      characters: new Array<Character>(),
    };
    this.weaponListItems[WeaponType.Sword] = {
      mainLabel: 'Sword',
      characters: new Array<Character>(),
    };

    for (const characterItem of this.characterData) {
      if (this.weaponListItems[characterItem.Weapon]) {
        this.weaponListItems[characterItem.Weapon].characters.push(
          characterItem
        );
      }
    }
  }

  private formatTierList() {
    this.tierListItems = new Array();

    this.tierListItems[0] = {
      mainImage: this.utilityService.getTierImage('S'),
      characters: new Array<Character>(),
    };
    this.tierListItems[1] = {
      mainImage: this.utilityService.getTierImage('A'),
      characters: new Array<Character>(),
    };
    this.tierListItems[2] = {
      mainImage: this.utilityService.getTierImage('B'),
      characters: new Array<Character>(),
    };
    this.tierListItems[3] = {
      mainImage: this.utilityService.getTierImage('C'),
      characters: new Array<Character>(),
    };
    this.tierListItems[4] = {
      mainImage: this.utilityService.getTierImage('D'),
      characters: new Array<Character>(),
    };

    for (const characterItem of this.characterData) {
      if (characterItem.Tier === 'S') {
        this.tierListItems[0].characters.push(characterItem);
      }
      if (characterItem.Tier === 'A') {
        this.tierListItems[1].characters.push(characterItem);
      }
      if (characterItem.Tier === 'B') {
        this.tierListItems[2].characters.push(characterItem);
      }
      if (characterItem.Tier === 'C') {
        this.tierListItems[3].characters.push(characterItem);
      }
      if (characterItem.Tier === 'D') {
        this.tierListItems[4].characters.push(characterItem);
      }
    }
  }

  get listItems() {
    if (this.groupType === 'element') return this.elementListItems;
    if (this.groupType === 'weapon') return this.weaponListItems;
    if (this.groupType === 'tier') return this.tierListItems;

    return null;
  }

  toggleCharacterItemsCollapsed() {
    if (!this.characterItemsCollapsed) {
      this.characterItemsCollapseButtonContent = 'show more';
      this.characterItemTitleStyle = 'max-width: 0px; overflow-x: hidden; margin: 0px;';
      this.characterItemContainerStyle = 'min-width: 8em; width: 8em;';
      this.characterItemTierStyle = 'margin-left: 6em;';
    }
    else {
      this.characterItemsCollapseButtonContent = 'show less';
      this.characterItemTitleStyle = '';
      this.characterItemContainerStyle = '';
      this.characterItemTierStyle ='';
    }

    this.characterItemsCollapsed = !this.characterItemsCollapsed;
  }

  groupButtonClick() {
    if (this.groupType === 'element') {
      this.router.navigate(['/character-list/weapon']);
    }
    if (this.groupType === 'weapon') {
      this.router.navigate(['/character-list/tier']);
    }
    if (this.groupType === 'tier') {
      this.router.navigate(['/character-list/element']);
    }
  }
}
