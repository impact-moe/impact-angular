import { ArtifactSetSummary } from '@/viewmodels/artifact-set.model';

export class ArtifactSet {
  Id: string;
  Name: string;
  MaxRarity: string;
  TwoPieceBonus: string;
  FourPieceBonus: string;

  constructor(artifactSetJson: any) {
    this.Id = artifactSetJson.id;
    this.Name = artifactSetJson.name;
    this.MaxRarity = artifactSetJson.maxRarity;
    this.TwoPieceBonus = artifactSetJson.twoPieceBonus;
    this.FourPieceBonus = artifactSetJson.fourPieceBonus;
  }

  toArtifactSetSummary() {
    return new ArtifactSetSummary.Builder(this.Id)
      .setName(this.Name)
      .setRarity(+this.MaxRarity)
      .setTwoPieceBonus(this.TwoPieceBonus)
      .setFourPieceBonus(this.FourPieceBonus)
      .build();
  }
}
