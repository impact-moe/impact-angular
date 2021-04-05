import { Weapon } from "./weapon.model";

export class WeaponPriority {
  Rank: number;
  CharacterRole: string;
  Weapon: Weapon;

  constructor(weaponPriorityJson: any) {
    this.Rank = weaponPriorityJson.rank;
    this.CharacterRole = weaponPriorityJson.characterRole;
    this.Weapon = new Weapon(weaponPriorityJson.weapon);
  }
}
