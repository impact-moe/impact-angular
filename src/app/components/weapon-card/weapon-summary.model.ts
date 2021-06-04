import { WeaponType } from '@/enums/weapon-type.enum';

export class WeaponSummary {
  readonly id: string;
  readonly name: string;
  readonly rarity: number;
  readonly imageUrl?: string;
  readonly baseAttack: number;
  readonly substatType?: string;
  readonly substatValue: number;
  readonly weaponType?: WeaponType;

  constructor(builder: WeaponSummary.Builder) {
    this.id = builder.getId();
    this.name = builder.getName() || 'Unknown';
    this.rarity = builder.getRarity() || 0;
    this.imageUrl = builder.getImageUrl();
    this.baseAttack = builder.getBaseAttack() || 0;
    this.substatType = builder.getSubstatType();
    this.substatValue = builder.getSubstatValue() || 0;
    this.weaponType = builder.getWeaponType();
  }

  hasTextInName(text: string) {
    if (!text) {
      return true;
    }

    return this.name.toLocaleLowerCase().includes(text.toLocaleLowerCase());
  }
}

export namespace WeaponSummary {
  export class Builder {
    private name?: string;
    private rarity?: number;
    private imageUrl?: string;
    private baseAttack?: number;
    private substatType?: string;
    private substatValue?: number;
    private weaponType?: WeaponType;

    constructor(private id: string) {}

    setName(name: string) {
      this.name = name;
      return this;
    }

    setRarity(rarity: number) {
      this.rarity = rarity;
      return this;
    }

    setImageUrl(imageUrl: string) {
      this.imageUrl = imageUrl;
      return this;
    }

    setBaseAttack(baseAttack: number) {
      this.baseAttack = baseAttack;
      return this;
    }

    setSubstatType(substatType: string) {
      this.substatType = substatType;
      return this;
    }

    setSubstatValue(substatValue: number) {
      this.substatValue = substatValue;
      return this;
    }

    setWeaponType(weaponType: WeaponType) {
      this.weaponType = weaponType;
      return this;
    }

    build() {
      return new WeaponSummary(this);
    }

    getId() {
      return this.id;
    }

    getName() {
      return this.name;
    }

    getRarity() {
      return this.rarity;
    }

    getImageUrl() {
      return this.imageUrl;
    }

    getBaseAttack() {
      return this.baseAttack;
    }

    getSubstatType() {
      return this.substatType;
    }

    getSubstatValue() {
      return this.substatValue;
    }

    getWeaponType() {
      return this.weaponType;
    }
  }

  export enum Sort {
    RARITY_DESCENDING,
    BASE_ATK_DESCENDING,
    SUBSTAT_VALUE_DESCENDING,
    ALPHABETICALLY,
  }

  export const getComparator = (sort: WeaponSummary.Sort) => {
    switch (sort) {
      case WeaponSummary.Sort.RARITY_DESCENDING:
        return WeaponSummary.Comparator.byRarity;
      case WeaponSummary.Sort.BASE_ATK_DESCENDING:
        return WeaponSummary.Comparator.byBaseAttack;
      case WeaponSummary.Sort.SUBSTAT_VALUE_DESCENDING:
        return WeaponSummary.Comparator.bySubstatValue;
      case WeaponSummary.Sort.ALPHABETICALLY:
      default:
        return WeaponSummary.Comparator.byNameAlphabetically;
    }
  };

  export class Comparator {
    static byRarity(a: WeaponSummary, b: WeaponSummary): number {
      if (a.rarity !== b.rarity) {
        return b.rarity - a.rarity;
      }

      return WeaponSummary.Comparator.byNameAlphabetically(a, b);
    }

    static byBaseAttack(a: WeaponSummary, b: WeaponSummary): number {
      if (a.baseAttack !== b.baseAttack) {
        return b.baseAttack - a.baseAttack;
      }

      return WeaponSummary.Comparator.byNameAlphabetically(a, b);
    }

    static bySubstatValue(a: WeaponSummary, b: WeaponSummary): number {
      if (a.substatValue !== b.substatValue) {
        return b.substatValue - a.substatValue;
      }

      return WeaponSummary.Comparator.byNameAlphabetically(a, b);
    }

    static byNameAlphabetically(a: WeaponSummary, b: WeaponSummary): number {
      return a.name.localeCompare(b.name);
    }
  }
}
