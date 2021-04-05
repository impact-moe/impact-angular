export class Talent {
  Id: string;
  Name: string;
  Description: string;
  Image: string;
  Type: string;

  constructor(talentJson: any) {
    this.Id = talentJson.id;
    this.Name = talentJson.name;
    this.Description = talentJson.description;
    this.Image = talentJson.image;
    this.Type = talentJson.type;
  }
}
