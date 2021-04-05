import { ArtifactType } from "../enums/artifact-type.enum";

export class MainStatPriority {
  ArtifactType: ArtifactType;
  CharacterRole: string;
  Type: string;

  constructor(mainStatPriorityJson: any) {
    this.ArtifactType = mainStatPriorityJson.artifactType;
    this.CharacterRole = mainStatPriorityJson.characterRole;
    this.Type = mainStatPriorityJson.type;
  }
}
