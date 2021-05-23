import { Region } from '@/enums/region.enum';
import { Element } from '@/enums/element.enum';

export class CharacterCardModel {
  readonly id: string;
  readonly name: string;
  readonly rarity: number;
  readonly imageUrl?: string;
  readonly element?: Element;
  readonly tier?: string;

  constructor(builder: CharacterCardModel.Builder) {
    this.id = builder.getId();
    this.name = builder.getName() || 'Unknown';
    this.rarity = builder.getRarity() || 0;
    this.imageUrl = builder.getImageUrl();
    this.element = builder.getElement();
    this.tier = builder.getTier();
  }
}

export namespace CharacterCardModel {
  export class Builder {
    private name?: string;
    private rarity?: number;
    private imageUrl?: string;
    private element?: Element;
    private tier?: string;

    constructor(private id: string) { }

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

    setElement(element: Element) {
      this.element = element;
      return this;
    }

    setTier(tier: string) {
      this.tier = tier;
      return this;
    }

    build() {
      return new CharacterCardModel(this);
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

    getElement() {
      return this.element;
    }

    getTier() {
      return this.tier;
    }
  }
}
