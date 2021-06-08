export class ArtifactSummary {
  readonly id: string;
  readonly name: string;
  readonly rarity: number;
  readonly imageUrl?: string;

  constructor(builder: ArtifactSummary.Builder) {
    this.id = builder.getId();
    this.name = builder.getName() || 'Unknown';
    this.rarity = builder.getRarity() || 0;
    this.imageUrl = builder.getImageUrl();
  }

  hasTextInName(text: string) {
    return this.name.toLocaleLowerCase().includes(text.toLocaleLowerCase());
  }
}

export namespace ArtifactSummary {
  export class Builder {
    private name?: string;
    private rarity?: number;
    private imageUrl?: string;

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

    build() {
      return new ArtifactSummary(this);
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
  }
}
