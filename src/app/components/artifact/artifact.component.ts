import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImpactService } from '../../services/impact.service';
import { UtilityService } from '../../services/utility.service';
import { Artifact } from 'src/app/models/artifact.model';

@Component({
  selector: 'app-artifact',
  templateUrl: './artifact.component.html',
  styleUrls: ['./artifact.component.css'],
})
export class ArtifactComponent {
  artifact?: Artifact;
  pageId = 'overview';

  constructor(
    private route: ActivatedRoute,
    private impactService: ImpactService,
    public utilityService: UtilityService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      if (!params.artifactId) return;

      if (params.pageId === 'overview') {
        this.impactService.getArtifact(params.artifactId).subscribe((data) => {
          this.artifact = data;

          this.pageId = params.pageId;
        });
      } else if (params.pageId === 'materials') {
        this.impactService.getArtifact(params.artifactId).subscribe((data) => {
          this.artifact = data;

          this.pageId = params.pageId;
        });
      }
    });
  }
}
