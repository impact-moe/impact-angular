export class ArtifactSet {
  Id: string;
  Name: string;
  MaxRarity: number;
  TwoPieceBonus: string;
  FourPieceBonus: string;

  constructor(artifactSetJson: any) {
    this.Id = artifactSetJson.id;
    this.Name = artifactSetJson.name;
    this.MaxRarity = artifactSetJson.maxRarity;
    this.TwoPieceBonus = artifactSetJson.twoPieceBonus;
    this.FourPieceBonus = artifactSetJson.fourPieceBonus;
  }
}
