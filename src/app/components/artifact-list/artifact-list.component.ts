import { Component, OnInit } from '@angular/core';
import { ImpactService } from '../../services/impact.service';
import { UtilityService } from '../../services/utility.service';
import { ArtifactType } from 'src/app/enums/artifact-type.enum';
import { Artifact } from 'src/app/models/artifact.model';

@Component({
  selector: 'app-artifact-list',
  templateUrl: './artifact-list.component.html',
  styleUrls: ['./artifact-list.component.css'],
})
export class ArtifactListComponent implements OnInit {
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

      for (const artifactItem of data) {
        this.listItems[artifactItem.ArtifactType].artifacts.push(artifactItem);
      }
    });
  }
}
