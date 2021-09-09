import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImpactService } from '@/services/impact.service';
import { UtilityService } from '@/services/utility.service';
import { Artifact } from 'src/app/models/artifact.model';

@Component({
  selector: 'app-artifact',
  templateUrl: './artifact.component.html',
  styleUrls: ['./artifact.component.scss'],
})
export class ArtifactComponent implements OnInit {
  artifact?: Artifact;

  constructor(
    private route: ActivatedRoute,
    private impactService: ImpactService,
    public utilityService: UtilityService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (!params.artifactId) return;

      this.impactService.getArtifact(params.artifactId).subscribe(data => {
        this.artifact = data;
      });
    });
  }
}
