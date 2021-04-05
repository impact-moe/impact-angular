export class CharacterOverview {
  AbilityTips: string;
  RecommendedRole: string;

  constructor(characterOverviewJson: any) {
    this.AbilityTips = characterOverviewJson.abilityTips;
    this.RecommendedRole = characterOverviewJson.recommendedRole;
  }
}
