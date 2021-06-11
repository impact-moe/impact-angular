import { ArtifactType } from '@/enums/artifact-type.enum';
export class ArtifactSummary {
  readonly id: string;
  readonly name: string;
  readonly setTitle: string;
  readonly rarity: number;
  readonly imageUrl?: string;
  readonly type?: ArtifactType;

  constructor(builder: ArtifactSummary.Builder) {
    this.id = builder.getId();
    this.name = builder.getName() || 'Unknown';
    this.setTitle = builder.getSetTitle() || '';
    this.rarity = builder.getRarity() || 0;
    this.imageUrl = builder.getImageUrl();
    this.type = builder.getType();
  }

  hasTextInSetOrName(text: string) {
    return (
      this.name.toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
      this.setTitle.toLocaleLowerCase().includes(text.toLocaleLowerCase())
    );
  }
}

export namespace ArtifactSummary {
  export class Builder {
    private name?: string;
    private setTitle?: string;
    private type?: ArtifactType;
    private rarity?: number;
    private imageUrl?: string;

    constructor(private id: string) {}

    setName(name: string) {
      this.name = name;
      return this;
    }

    setSetTitle(setTitle: string) {
      this.setTitle = setTitle;
      return this;
    }

    setType(type: ArtifactType) {
      this.type = type;
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

    getSetTitle() {
      return this.setTitle;
    }

    getType() {
      return this.type;
    }

    getRarity() {
      return this.rarity;
    }

    getImageUrl() {
      return this.imageUrl;
    }
  }

  export enum Sort {
    NONE,
    SET_ALPHABETICALLY,
    RARITY_DESCENDING,
  }

  export const getComparator = (sort: ArtifactSummary.Sort) => {
    switch (sort) {
      case ArtifactSummary.Sort.SET_ALPHABETICALLY:
        return ArtifactSummary.Comparator.bySetName;
      case ArtifactSummary.Sort.RARITY_DESCENDING:
        return ArtifactSummary.Comparator.byRarity;
      default:
        return ArtifactSummary.Comparator.noOp;
    }
  };

  export const getTypeValue = (type?: ArtifactType) => {
    switch (type) {
      case ArtifactType.Flower:
        return 5;
      case ArtifactType.Feather:
        return 4;
      case ArtifactType.Sands:
        return 3;
      case ArtifactType.Goblet:
        return 2;
      case ArtifactType.Circlet:
        return 1;
      default:
        return 0;
    }
  };

  export class Comparator {
    static noOp(a: ArtifactSummary, b: ArtifactSummary) {
      return 0;
    }

    static bySetName(a: ArtifactSummary, b: ArtifactSummary) {
      const setNameComparison = ArtifactSummary.Comparator.byOnlySetName(a, b);
      const rarityComparison = ArtifactSummary.Comparator.byOnlyRarity(a, b);

      return setNameComparison === 0
        ? rarityComparison == 0
          ? ArtifactSummary.Comparator.byType(a, b)
          : rarityComparison
        : setNameComparison;
    }

    static byOnlySetName(a: ArtifactSummary, b: ArtifactSummary) {
      return a.setTitle.localeCompare(b.setTitle);
    }

    static byRarity(a: ArtifactSummary, b: ArtifactSummary) {
      const rarityComparison = ArtifactSummary.Comparator.byOnlyRarity(a, b);
      const setNameComparison = ArtifactSummary.Comparator.byOnlySetName(a, b);

      return rarityComparison == 0
        ? setNameComparison == 0
          ? ArtifactSummary.Comparator.byType(a, b)
          : setNameComparison
        : rarityComparison;
    }

    static byOnlyRarity(a: ArtifactSummary, b: ArtifactSummary) {
      return b.rarity - a.rarity;
    }

    static byType(a: ArtifactSummary, b: ArtifactSummary) {
      return (
        ArtifactSummary.getTypeValue(b.type) -
        ArtifactSummary.getTypeValue(a.type)
      );
    }
  }
}
