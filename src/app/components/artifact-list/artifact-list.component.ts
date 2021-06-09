import { ArtifactType } from './../../enums/artifact-type.enum';
import { ArtifactSummary } from '@/components/artifact-card/artifact-summary.model';
import {
  FilterSortConfiguration,
  FilterSortOption,
} from '@/components/filter-sort/filter-sort.component';
import { ImpactService } from '@/services/impact.service';
import { Component, OnInit } from '@angular/core';
import { Artifact } from 'src/app/models/artifact.model';

export const FILTER_OPTIONS: Array<FilterSortOption> = [
  { label: 'All Types', value: undefined },
  { label: 'Flowers', value: ArtifactType.Flower },
  { label: 'Feathers', value: ArtifactType.Feather },
  { label: 'Sands', value: ArtifactType.Sands },
  { label: 'Goblets', value: ArtifactType.Goblet },
  { label: 'Circlets', value: ArtifactType.Circlet },
];

export const SORT_OPTIONS: Array<FilterSortOption> = [
  { label: 'Set Title (A->Z)', value: ArtifactSummary.Sort.SET_ALPHABETICALLY },
  { label: 'Rarity', value: ArtifactSummary.Sort.RARITY_DESCENDING },
];

@Component({
  selector: 'app-artifact-list',
  templateUrl: './artifact-list.component.html',
  styleUrls: ['./artifact-list.component.scss'],
})
export class ArtifactListComponent implements OnInit {
  readonly filterOptions = FILTER_OPTIONS;
  readonly sortOptions = SORT_OPTIONS;

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
    let filteredResults: Array<ArtifactSummary> = this.isRefiningSearch(config)
      ? this.currentResults
      : this.allData;

    const filterCategory = config.selectedFilter.value;
    const sort = config.selectedSort.value;

    if (filterCategory) {
      filteredResults = filteredResults.filter(
        item => item.type === filterCategory
      );
    }

    filteredResults = filteredResults.filter(item =>
      item.hasTextInName(config.filterText)
    );

    if (sort) {
      filteredResults = filteredResults.sort(
        ArtifactSummary.getComparator(sort)
      );
    }

    this.currentConfig = config;
    this.currentResults = filteredResults;
  }

  /**
   * Determines whether the given search configuration is a subset of the one
   * we have stored locally.
   */
  private isRefiningSearch(config: FilterSortConfiguration) {
    return (
      !!this.currentConfig &&
      !!config.filterText &&
      config.filterText.includes(this.currentConfig.filterText) &&
      config.selectedFilter === this.currentConfig.selectedFilter
    );
  }

  get resultsMessage() {
    const plural = this.results.length === 1 ? '' : 's';

    return `${this.results.length} result${plural}`;
  }

  get results() {
    return this.currentResults;
  }
}
