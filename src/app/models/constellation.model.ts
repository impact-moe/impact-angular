export class Constellation {
  Id: string;
  Name: string;
  Description: string;
  Image: string;
  Order: number;

  constructor(constellationJson: any) {
    this.Id = constellationJson.id;
    this.Name = constellationJson.name;
    this.Description = constellationJson.description;
    this.Image = constellationJson.image;
    this.Order = constellationJson.order;
  }
}
