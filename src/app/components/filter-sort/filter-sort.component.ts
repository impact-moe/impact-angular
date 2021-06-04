/**
 * @fileoverview Component that manages filter and sort options. Currently, it
 * presumes that both represent disjoint sets (i.e. only one option may be
 * selected at a time) and it selects the first option by default.
 */

import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

export interface FilterSortOption {
  label: string;
  value?: any;
}

export interface FilterSortConfiguration {
  filterText: string;
  selectedFilter: FilterSortOption;
  selectedSort: FilterSortOption;
}

export const NO_FILTER_TEXT: string = '';
export const NO_OPTION: FilterSortOption = {
  label: 'None Selected',
  value: undefined
}

export const DEFAULT_PLACEHOLDER_TEXT: string = "Start a search…";

@Component({
  selector: 'moe-filter-sort',
  templateUrl: './filter-sort.component.html',
  styleUrls: ['./filter-sort.component.scss'],
})
export class FilterSortComponent implements OnInit {
  @Input() placeholderText?: string;
  @Input() filterOptions?: Array<any>;
  @Input() sortOptions?: Array<any>;

  @Output() filterSortEvent = new EventEmitter<FilterSortConfiguration>();

  private filterMenuIsOpen = false;
  private sortMenuIsOpen = false;
  private currentConfiguration = {
    filterText: NO_FILTER_TEXT,
    selectedFilter: NO_OPTION,
    selectedSort: NO_OPTION
  }

  ngOnInit() {
    const selectedFilter = !!this.filterOptions ? this.filterOptions[0] : NO_OPTION;
    const selectedSort = !!this.sortOptions ? this.sortOptions[0] : NO_OPTION;

    this.updateCurrentConfiguration({
      filterText: NO_FILTER_TEXT,
      selectedFilter,
      selectedSort
    });
  }

  private updateCurrentConfiguration(config: FilterSortConfiguration) {
    this.currentConfiguration = config;
    this.filterSortEvent.emit(this.currentConfiguration);
  }

  getPlaceholderText() {
    return !!this.placeholderText ? this.placeholderText : DEFAULT_PLACEHOLDER_TEXT;
  }

  onSearchInput(value: string) {
    this.updateCurrentConfiguration({
      filterText: value,
      selectedFilter: this.currentConfiguration.selectedFilter,
      selectedSort: this.currentConfiguration.selectedSort
    });
  }

  get hasFilterOptions() {
    return !!this.filterOptions && this.filterOptions.length > 0;
  }

  get hasSortOptions() {
    return !!this.sortOptions && this.sortOptions.length > 0;
  }

  toggleFilterMenu() {
    this.closeSortMenu();
    this.filterMenuIsOpen = !this.filterMenuIsOpen;
  }

  toggleSortMenu() {
    this.closeFilterMenu();
    this.sortMenuIsOpen = !this.sortMenuIsOpen;
  }

  get currentFilter() {
    return this.currentConfiguration.selectedFilter;
  }

  get currentSort() {
    return this.currentConfiguration.selectedSort;
  }

  selectFilter(value: FilterSortOption) {
    this.closeFilterMenu();

    this.updateCurrentConfiguration({
      filterText: this.currentConfiguration.filterText,
      selectedFilter: value,
      selectedSort: this.currentConfiguration.selectedSort
    });
  }

  selectSort(value: FilterSortOption) {
    this.closeSortMenu();

    this.updateCurrentConfiguration({
      filterText: this.currentConfiguration.filterText,
      selectedFilter: this.currentConfiguration.selectedFilter,
      selectedSort: value
    });
  }

  closeFilterMenu() {
    this.filterMenuIsOpen = false;
  }

  closeSortMenu() {
    this.sortMenuIsOpen = false;
  }

  shouldShowFilterOptions() {
    return this.filterMenuIsOpen;
  }

  shouldShowSortOptions() {
    return this.sortMenuIsOpen;
  }
}
