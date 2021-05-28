import { ArtifactPriority } from './artifact-priority.model';
import { MainStatPriority } from './main-stat-priority.model';
import { SubStatPriority } from './sub-stat-priority.model';
import { WeaponPriority } from './weapon-priority.model';

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

    if (roleJson.weaponPriorities) {
      for (const weaponJson of roleJson.weaponPriorities) {
        this.Weapons.push(new WeaponPriority(weaponJson));
      }
    }

    if (roleJson.artifactPriorities) {
      for (const artifactJson of roleJson.artifactPriorities) {
        this.Artifacts.push(new ArtifactPriority(artifactJson));
      }
    }

    if (roleJson.mainStatPriorities) {
      for (const mainStatJson of roleJson.mainStatPriorities) {
        this.MainStats.push(new MainStatPriority(mainStatJson));
      }
    }

    if (roleJson.subStatPriorities) {
      for (const subStatJson of roleJson.subStatPriorities) {
        this.SubStats.push(new SubStatPriority(subStatJson));
      }
    }
  }
}
