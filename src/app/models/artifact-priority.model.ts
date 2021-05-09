import { ArtifactSet } from './artifact-set.model';

export class ArtifactPriority {
  Id: string;
  Rank: number;
  CharacterRole: string;
  ArtifactSet: ArtifactSet;

  constructor(artifactPriorityJson: any) {
    this.Id = artifactPriorityJson.id;
    this.Rank = artifactPriorityJson.rank;
    this.CharacterRole = artifactPriorityJson.characterRole;
    this.ArtifactSet = new ArtifactSet(artifactPriorityJson.artifactSet);
  }
}
