import { Component } from '@angular/core';
import { ImpactService } from '../../services/impact.service';
import { UtilityService } from '../../services/utility.service';
import { ArtifactType } from 'src/app/enums/artifact-type.enum';
import { Artifact } from 'src/app/models/artifact.model';

@Component({
  selector: 'app-artifact-list',
  templateUrl: './artifact-list.component.html',
  styleUrls: ['./artifact-list.component.scss'],
})
export class ArtifactListComponent {
  listItems?: { [key: string]: any };
  groupType = '';

  constructor(
    private impactService: ImpactService,
    public utilityService: UtilityService
  ) {}

  ngOnInit() {
    this.impactService.getArtifacts().subscribe((data: Array<Artifact>) => {
      this.listItems = new Array();

      this.listItems[ArtifactType.Circlet] = {
        mainLabel: 'Circlet',
        artifacts: new Array<Artifact>(),
      };
      this.listItems[ArtifactType.Feather] = {
        mainLabel: 'Feather',
        artifacts: new Array<Artifact>(),
      };
      this.listItems[ArtifactType.Flower] = {
        mainLabel: 'Flower',
        artifacts: new Array<Artifact>(),
      };
      this.listItems[ArtifactType.Goblet] = {
        mainLabel: 'Goblet',
        artifacts: new Array<Artifact>(),
      };
      this.listItems[ArtifactType.Sands] = {
        mainLabel: 'Sands',
        artifacts: new Array<Artifact>(),
      };

      for (let artifactItem of data) {
        this.listItems[artifactItem.ArtifactType].artifacts.push(artifactItem);
      }
    });
  }
}
