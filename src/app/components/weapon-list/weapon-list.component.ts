import { Component, OnInit } from '@angular/core';
import { ImpactService } from '../../services/impact.service';
import { UtilityService } from '../../services/utility.service';
import { Character } from '../../models/character.model';
import { WeaponType } from '../../enums/weapon-type.enum';
import { Weapon } from 'src/app/models/weapon.model';

@Component({
  selector: 'app-weapon-list',
  templateUrl: './weapon-list.component.html',
  styleUrls: ['./weapon-list.component.scss'],
})
export class WeaponListComponent implements OnInit {
  listItems?: { [key: string]: any };
  groupType = '';

  constructor(
    private impactService: ImpactService,
    public utilityService: UtilityService
  ) {}

  ngOnInit() {
    this.impactService.getWeapons().subscribe((data: Array<Weapon>) => {
      this.listItems = new Array();

      this.listItems[WeaponType.Bow] = {
        mainLabel: 'Bow',
        weapons: new Array<Character>(),
      };
      this.listItems[WeaponType.Catalyst] = {
        mainLabel: 'Catalyst',
        weapons: new Array<Character>(),
      };
      this.listItems[WeaponType.Claymore] = {
        mainLabel: 'Claymore',
        weapons: new Array<Character>(),
      };
      this.listItems[WeaponType.Polearm] = {
        mainLabel: 'Polearm',
        weapons: new Array<Character>(),
      };
      this.listItems[WeaponType.Sword] = {
        mainLabel: 'Sword',
        weapons: new Array<Character>(),
      };

      for (const weaponItem of data) {
        this.listItems[weaponItem.WeaponType].weapons.push(weaponItem);
      }
    });
  }
}
