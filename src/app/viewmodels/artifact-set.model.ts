export class ArtifactSetSummary {
  readonly id: string;
  readonly name: string;
  readonly rarity: number;
  readonly twoPieceBonus: string;
  readonly fourPieceBonus: string;
  readonly imageUrl: string;

  constructor(builder: ArtifactSetSummary.Builder) {
    this.id = builder.getId();
    this.name = builder.getName() || 'Unknown';
    this.rarity = builder.getRarity() || 0;
    this.twoPieceBonus = builder.getTwoPieceBonus() || '';
    this.fourPieceBonus = builder.getFourPieceBonus() || '';
    this.imageUrl = builder.getImageUrl() || '';
  }
}

export namespace ArtifactSetSummary {
  export class Builder {
    private id: string;
    private name?: string;
    private rarity?: number;
    private twoPieceBonus?: string;
    private fourPieceBonus?: string;
    private imageUrl?: string;

    constructor(id: string) {
      this.id = id;
    }

    setName(name: string) {
      this.name = name;
      return this;
    }

    setRarity(rarity: number) {
      this.rarity = rarity;
      return this;
    }

    setTwoPieceBonus(twoPieceBonus: string) {
      this.twoPieceBonus = twoPieceBonus;
      return this;
    }

    setFourPieceBonus(fourPieceBonus: string) {
      this.fourPieceBonus = fourPieceBonus;
      return this;
    }

    setImageUrl(imageUrl: string) {
      this.imageUrl = imageUrl;
      return this;
    }

    build() {
      return new ArtifactSetSummary(this);
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

    getTwoPieceBonus() {
      return this.twoPieceBonus;
    }

    getFourPieceBonus() {
      return this.fourPieceBonus;
    }

    getImageUrl() {
      return this.imageUrl;
    }
  }
}
