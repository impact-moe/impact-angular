import { ArtifactSummary } from './../components/artifact-card/artifact-summary.model';
import { ArtifactType } from '@/enums/artifact-type.enum';
import { Rarity } from '@/enums/rarity.enum';
import { ArtifactSet } from './artifact-set.model';

export class Artifact {
  Id: string;
  Name: string;
  Rarity: Rarity;
  ArtifactType: ArtifactType;
  Description: string;
  Image: string;
  ArtifactSet: ArtifactSet;

  constructor(artifactJson: any) {
    this.Id = artifactJson.id;
    this.Name = artifactJson.name;
    this.Rarity = artifactJson.rarity;
    this.Image = artifactJson.image;
    this.Description = artifactJson.description;
    this.ArtifactType = artifactJson.type;
    this.ArtifactSet = new ArtifactSet(artifactJson.artifactSet);
  }

  toArtifactSummary() {
    return new ArtifactSummary.Builder(this.Id)
      .setName(this.Name)
      .setSetTitle(this.ArtifactSet.Name)
      .setType(this.ArtifactType)
      .setRarity(this.Rarity)
      .setImageUrl(this.Image)
      .build();
  }
}
