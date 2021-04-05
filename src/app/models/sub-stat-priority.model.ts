export class SubStatPriority {
  Rank: number;
  Type: string;
  CharacterRole: string;

  constructor(subStatPriorityJson: any) {
    this.Rank = subStatPriorityJson.rank;
    this.Type = subStatPriorityJson.type;
    this.CharacterRole = subStatPriorityJson.characterRole;
  }
}
