import {
  FilterSortConfiguration,
  FilterSortOption,
} from '@/components/filter-sort/filter-sort.component';
import { WeaponSummary } from '@/components/weapon-card/weapon-summary.model';
import { WeaponType } from '@/enums/weapon-type.enum';
import { Weapon } from '@/models/weapon.model';
import { ImpactService } from '@/services/impact.service';
import { UtilityService } from '@/services/utility.service';
import { Component } from '@angular/core';

export const FILTER_OPTIONS: Array<FilterSortOption> = [
  { label: 'All Types', value: undefined },
  { label: 'Bows', value: WeaponType.Bow },
  { label: 'Catalysts', value: WeaponType.Catalyst },
  { label: 'Claymores', value: WeaponType.Claymore },
  { label: 'Polearms', value: WeaponType.Polearm },
  { label: 'Swords', value: WeaponType.Sword },
];

export const SORT_OPTIONS: Array<FilterSortOption> = [
  { label: 'Rarity', value: WeaponSummary.Sort.RARITY_DESCENDING },
  { label: 'Base ATK', value: WeaponSummary.Sort.BASE_ATK_DESCENDING },
  {
    label: 'Substat Value',
    value: WeaponSummary.Sort.SUBSTAT_VALUE_DESCENDING,
  },
  { label: 'Name (A->Z)', value: WeaponSummary.Sort.ALPHABETICALLY },
];

@Component({
  selector: 'app-weapon-list',
  templateUrl: './weapon-list.component.html',
  styleUrls: ['./weapon-list.component.scss'],
})
export class WeaponListComponent {
  readonly filterOptions = FILTER_OPTIONS;
  readonly sortOptions = SORT_OPTIONS;

  private allData: Array<WeaponSummary> = [];
  private currentConfig?: FilterSortConfiguration;
  private currentResults: Array<WeaponSummary> = [];

  constructor(
    private impactService: ImpactService,
    public utilityService: UtilityService
  ) {
    this.impactService.getWeapons().subscribe((next: Array<Weapon>) => {
      this.allData = next.map(item => item.toWeaponSummary());
    });
  }

  get placeholderText() {
    return 'Find a weapon by name…';
  }

  hasData() {
    return this.allData.length > 0;
  }

  updateConfiguration(config: FilterSortConfiguration) {
    let filteredResults: Array<WeaponSummary> = this.isRefiningSearch(config)
      ? this.currentResults
      : this.allData;

    const filterCategory = config.selectedFilter.value;
    const sort = config.selectedSort.value;

    if (filterCategory) {
      filteredResults = filteredResults.filter(
        item => item.weaponType === filterCategory
      );
    }

    filteredResults = filteredResults.filter(item =>
      item.hasTextInName(config.filterText)
    );

    if (sort) {
      filteredResults = filteredResults.sort(WeaponSummary.getComparator(sort));
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

  get results(): Array<WeaponSummary> {
    return this.currentResults;
  }

  get resultsMessage() {
    const plural = this.results.length === 1 ? '' : 's';

    return `${this.results.length} result${plural}`;
  }
}
