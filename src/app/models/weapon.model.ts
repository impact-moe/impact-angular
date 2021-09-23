import { WeaponStat } from '@/models/weapon-stat.model';
import { Rarity } from '@/enums/rarity.enum';
import { WeaponType } from '@/enums/weapon-type.enum';
import { WeaponSummary } from '@/viewmodels/weapon-summary.model';

export class Weapon {
  Id: string;
  Name: string;
  WeaponType: WeaponType;
  Rarity: Rarity;
  BaseAtk: number;
  SubStatType: string;
  SubStat: number;
  AbilityName: string;
  AbilityDescription: string;
  Description: string;
  Lore: string;
  Image: string;
  Location: string;
  Stats = new Array<WeaponStat>();

  constructor(weaponJson: any) {
    this.Id = weaponJson.id;
    this.Name = weaponJson.name;
    this.WeaponType = weaponJson.type;
    this.Rarity = weaponJson.rarity;
    this.BaseAtk = weaponJson.baseAtk;
    this.SubStatType = weaponJson.subStatType;
    this.SubStat = weaponJson.subStat;
    this.AbilityName = weaponJson.abilityName;
    this.AbilityDescription = weaponJson.abilityDescription;
    this.Description = weaponJson.description;
    this.Lore = weaponJson.lore;
    this.Image = weaponJson.image;
    this.Location = weaponJson.location;

    if (weaponJson.stats) {
      for (const weaponStatJson of weaponJson.stats) {
        this.Stats.push(new WeaponStat(weaponStatJson));
      }
    }
  }

  toWeaponSummary() {
    return new WeaponSummary.Builder(this.Id)
      .setName(this.Name)
      .setRarity(this.Rarity)
      .setImageUrl(this.Image)
      .setBaseAttack(this.BaseAtk)
      .setSubstatType(this.SubStatType)
      .setSubstatValue(this.SubStat)
      .setWeaponType(this.WeaponType)
      .build();
  }
}
