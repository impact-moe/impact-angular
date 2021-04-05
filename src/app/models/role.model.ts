import { ArtifactPriority } from "./artifact-priority.model";
import { MainStatPriority } from "./main-stat-priority.model";
import { SubStatPriority } from "./sub-stat-priority.model";
import { WeaponPriority } from "./weapon-priority.model";

export class Role {
  Name: string;
  Notes: string;
  Weapons = new Array<WeaponPriority>();
  Artifacts = new Array<ArtifactPriority>();
  MainStats = new Array<MainStatPriority>();
  SubStats = new Array<SubStatPriority>();

  constructor(roleJson: any) {
    this.Name = roleJson.name;
    this.Notes = roleJson.notes;

    if (roleJson.weapons)
      for (let weaponJson of roleJson.weapons)
        this.Weapons.push(new WeaponPriority(weaponJson));

    if (roleJson.artifacts)
      for (let artifactJson of roleJson.artifacts)
        this.Artifacts.push(new ArtifactPriority(artifactJson));

    if (roleJson.mainStats)
      for (let mainStatJson of roleJson.mainStats)
        this.MainStats.push(new MainStatPriority(mainStatJson))

    if (roleJson.subStats)
      for (let subStatJson of roleJson.subStats)
        this.SubStats.push(new SubStatPriority(subStatJson));
  }
}
