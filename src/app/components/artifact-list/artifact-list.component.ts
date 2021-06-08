import { ArtifactSummary } from '@/components/artifact-card/artifact-summary.model';
import { FilterSortConfiguration } from '@/components/filter-sort/filter-sort.component';
import { ImpactService } from '@/services/impact.service';
import { Component, OnInit } from '@angular/core';
import { Artifact } from 'src/app/models/artifact.model';

@Component({
  selector: 'app-artifact-list',
  templateUrl: './artifact-list.component.html',
  styleUrls: ['./artifact-list.component.scss'],
})
export class ArtifactListComponent implements OnInit {
  private allData: Array<ArtifactSummary> = [];
  private currentConfig?: FilterSortConfiguration;
  private currentResults: Array<ArtifactSummary> = [];

  constructor(private impactService: ImpactService) {}

  ngOnInit() {
    this.impactService.getArtifacts().subscribe((next: Array<Artifact>) => {
      this.allData = next.map(item => item.toArtifactSummary());
    });
  }

  get placeholderText() {
    return 'Find an artifact by name…';
  }

  hasData() {
    return !!this.allData && this.allData.length > 0;
  }

  updateConfiguration(config: FilterSortConfiguration) {
    let filteredResults: Array<ArtifactSummary> = this.allData;

    filteredResults = filteredResults.filter(item =>
      item.hasTextInName(config.filterText)
    );

    this.currentConfig = config;
    this.currentResults = filteredResults;
  }

  get resultsMessage() {
    const plural = this.results.length === 1 ? '' : 's';

    return `${this.results.length} result${plural}`;
  }

  get results() {
    return this.currentResults;
  }
}
