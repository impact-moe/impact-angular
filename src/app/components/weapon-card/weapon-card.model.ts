export class WeaponCardModel {
  readonly id: string;
  readonly name: string;
  readonly rarity: number;
  readonly imageUrl?: string;
  readonly baseAttack: number;
  readonly substatType?: string;
  readonly substatValue: number;

  constructor(builder: WeaponCardModel.Builder) {
    this.id = builder.getId();
    this.name = builder.getName() || 'Unknown';
    this.rarity = builder.getRarity() || 0;
    this.imageUrl = builder.getImageUrl();
    this.baseAttack = builder.getBaseAttack() || 0;
    this.substatType = builder.getSubstatType();
    this.substatValue = builder.getSubstatValue() || 0;
  }
}

export namespace WeaponCardModel {
  export class Builder {
    private name?: string;
    private rarity?: number;
    private imageUrl?: string;
    private baseAttack?: number;
    private substatType?: string;
    private substatValue?: number;

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

    build() {
      return new WeaponCardModel(this);
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
  }
}
