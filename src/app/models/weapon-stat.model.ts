export class WeaponStat {
  Level: number;
  BaseAtk: number;
  SubStat: number;

  constructor(weaponStatJson: any) {
    this.Level = weaponStatJson.level;
    this.BaseAtk = weaponStatJson.baseAtk;
    this.SubStat = weaponStatJson.subStat;
  }
}
