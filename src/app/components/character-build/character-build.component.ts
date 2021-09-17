import { ArtifactSetSummary } from './../artifact-chip/artifact-set.model';
import { UtilityService } from '@/services/utility.service';
import { Role } from '@/models/role.model';
import { Component, Input, OnInit } from '@angular/core';
import { ArtifactSet } from '@/models/artifact-set.model';

export interface ArtifactBuild {
  sets: Array<ArtifactSetSummary>;
}

@Component({
  selector: 'moe-character-build',
  templateUrl: './character-build.component.html',
  styleUrls: ['./character-build.component.scss'],
})
export class CharacterBuildComponent implements OnInit {
  @Input() role!: Role;
  @Input() isRecommended?: boolean;

  isExpanded = true;
  artifactBuilds: Array<ArtifactBuild> = [];

  constructor(public utilityService: UtilityService) {}

  ngOnInit() {
    this.isRecommended = !!this.isRecommended;

    for (const artifactPriority of this.role.Artifacts) {
      const build = this.artifactBuilds[artifactPriority.Rank - 1];

      if (!build) {
        this.artifactBuilds[artifactPriority.Rank - 1] = {
          sets: [artifactPriority.ArtifactSet.toArtifactSetSummary()],
        };
      } else {
        this.artifactBuilds[artifactPriority.Rank - 1].sets.push(
          artifactPriority.ArtifactSet.toArtifactSetSummary()
        );
      }
    }
  }

  toggleView() {
    this.isExpanded = !this.isExpanded;
  }

  get toggleIcon() {
    return this.isExpanded ? 'expand_less' : 'expand_more';
  }
}
