import {
  DEFAULT_PLACEHOLDER_TEXT,
  FilterSortComponent,
  NO_FILTER_TEXT,
  NO_OPTION,
} from './filter-sort.component';
import { MoeRarityStubComponent } from '@/components/rarity/rarity.component.stub';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

describe('FilterSortComponent', () => {
  const sampleOptions = [
    { label: 'Option 1', value: 1 },
    { label: 'Option 2', value: 2 },
    { label: 'Option 3', value: 3 },
  ];

  let fixture: ComponentFixture<FilterSortComponent>;
  let component: FilterSortComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [MoeRarityStubComponent, FilterSortComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FilterSortComponent);
    component = fixture.componentInstance;
  });

  describe('Text Search', () => {
    it(
      'should always display a text search input',
      waitForAsync(() => {
        expect(
          fixture.nativeElement.querySelector('.moe-search-input')
        ).toBeTruthy();
      })
    );

    it(
      'should use the default placeholder text when none is specified',
      waitForAsync(() => {
        fixture.detectChanges();
        expect(
          fixture.nativeElement.querySelector('.moe-search-input').placeholder
        ).toBe(DEFAULT_PLACEHOLDER_TEXT);
      })
    );

    it(
      'should use the specified placeholder text when given',
      waitForAsync(() => {
        component.placeholderText = 'test';
        fixture.detectChanges();

        expect(
          fixture.nativeElement.querySelector('.moe-search-input').placeholder
        ).toBe('test');
      })
    );

    it(
      'should emit text input when given',
      waitForAsync(() => {
        spyOn(component.filterSortEvent, 'emit');

        const searchElement =
          fixture.nativeElement.querySelector('.moe-search-input');
        searchElement.value = 'test';
        searchElement.dispatchEvent(new Event('input'));

        expect(component.filterSortEvent.emit).toHaveBeenCalledWith({
          filterText: 'test',
          selectedFilter: NO_OPTION,
          selectedSort: NO_OPTION,
        });
      })
    );
  });

  describe('Filter', () => {
    it(
      'should not display the filter toggle without filter options',
      waitForAsync(() => {
        expect(
          fixture.nativeElement.querySelector('.moe-filter-toggle')
        ).toBeFalsy();
      })
    );

    it(
      'should display the filter toggle when given a list of filter options',
      waitForAsync(() => {
        component.filterOptions = sampleOptions;
        fixture.detectChanges();

        expect(
          fixture.nativeElement.querySelector('.moe-filter-toggle')
        ).toBeTruthy();
      })
    );

    it(
      'should not display the filter options initially',
      waitForAsync(() => {
        component.filterOptions = sampleOptions;
        fixture.detectChanges();

        expect(
          fixture.nativeElement.querySelector('.moe-filter-options')
        ).toBeFalsy();
      })
    );

    it(
      'should display the filter options on toggle',
      waitForAsync(() => {
        component.filterOptions = sampleOptions;
        fixture.detectChanges();

        const toggleButton =
          fixture.nativeElement.querySelector('.moe-filter-toggle');
        toggleButton.click();
        fixture.detectChanges();

        expect(
          fixture.nativeElement.querySelector('.moe-filter-options')
        ).toBeTruthy();
      })
    );

    it(
      'should select the first filter option by default',
      waitForAsync(() => {
        component.filterOptions = sampleOptions;
        fixture.detectChanges();

        const toggleButton =
          fixture.nativeElement.querySelector('.moe-filter-toggle');
        toggleButton.click();
        fixture.detectChanges();

        const filterOptions =
          fixture.nativeElement.getElementsByClassName('moe-filter-option');
        expect(filterOptions[0].getAttribute('class')).toContain('selected');
      })
    );

    it(
      'should close the filter menu on option select',
      waitForAsync(() => {
        component.filterOptions = sampleOptions;
        fixture.detectChanges();

        const toggleButton =
          fixture.nativeElement.querySelector('.moe-filter-toggle');
        toggleButton.click();
        fixture.detectChanges();

        const filterOptions =
          fixture.nativeElement.getElementsByClassName('moe-filter-option');
        filterOptions[0].click();
        fixture.detectChanges();

        expect(
          fixture.nativeElement.querySelector('.moe-filter-options')
        ).toBeFalsy();
      })
    );

    it(
      'should emit an event on option select',
      waitForAsync(() => {
        spyOn(component.filterSortEvent, 'emit');
        component.filterOptions = sampleOptions;
        fixture.detectChanges();

        const toggleButton =
          fixture.nativeElement.querySelector('.moe-filter-toggle');
        toggleButton.click();
        fixture.detectChanges();

        const filterOptions =
          fixture.nativeElement.getElementsByClassName('moe-filter-option');
        filterOptions[0].click();

        expect(component.filterSortEvent.emit).toHaveBeenCalledWith({
          filterText: NO_FILTER_TEXT,
          selectedFilter: sampleOptions[0],
          selectedSort: NO_OPTION,
        });
      })
    );
  });

  describe('Sort', () => {
    it(
      'should not display the sort toggle without sort options',
      waitForAsync(() => {
        expect(
          fixture.nativeElement.querySelector('.moe-sort-toggle')
        ).toBeFalsy();
      })
    );

    it(
      'should display the sort toggle when given a list of sort options',
      waitForAsync(() => {
        component.sortOptions = sampleOptions;
        fixture.detectChanges();

        expect(
          fixture.nativeElement.querySelector('.moe-sort-toggle')
        ).toBeTruthy();
      })
    );

    it(
      'should not display the sort options initially',
      waitForAsync(() => {
        component.sortOptions = sampleOptions;
        fixture.detectChanges();

        expect(
          fixture.nativeElement.querySelector('.moe-sort-options')
        ).toBeFalsy();
      })
    );

    it(
      'should display the sort options on toggle',
      waitForAsync(() => {
        component.sortOptions = sampleOptions;
        fixture.detectChanges();

        const toggleButton =
          fixture.nativeElement.querySelector('.moe-sort-toggle');
        toggleButton.click();
        fixture.detectChanges();

        expect(
          fixture.nativeElement.querySelector('.moe-sort-options')
        ).toBeTruthy();
      })
    );

    it(
      'should select the first sort option by default',
      waitForAsync(() => {
        component.sortOptions = sampleOptions;
        fixture.detectChanges();

        const toggleButton =
          fixture.nativeElement.querySelector('.moe-sort-toggle');
        toggleButton.click();
        fixture.detectChanges();

        const sortOptions =
          fixture.nativeElement.getElementsByClassName('moe-sort-option');
        expect(sortOptions[0].getAttribute('class')).toContain('selected');
      })
    );

    it(
      'should close the sort menu on option select',
      waitForAsync(() => {
        component.sortOptions = sampleOptions;
        fixture.detectChanges();

        const toggleButton =
          fixture.nativeElement.querySelector('.moe-sort-toggle');
        toggleButton.click();
        fixture.detectChanges();

        const sortOptions =
          fixture.nativeElement.getElementsByClassName('moe-sort-option');
        sortOptions[0].click();
        fixture.detectChanges();

        expect(
          fixture.nativeElement.querySelector('.moe-sort-options')
        ).toBeFalsy();
      })
    );

    it(
      'should emit an event on option select',
      waitForAsync(() => {
        spyOn(component.filterSortEvent, 'emit');
        component.sortOptions = sampleOptions;
        fixture.detectChanges();

        const toggleButton =
          fixture.nativeElement.querySelector('.moe-sort-toggle');
        toggleButton.click();
        fixture.detectChanges();

        const sortOptions =
          fixture.nativeElement.getElementsByClassName('moe-sort-option');
        sortOptions[0].click();

        expect(component.filterSortEvent.emit).toHaveBeenCalledWith({
          filterText: NO_FILTER_TEXT,
          selectedFilter: NO_OPTION,
          selectedSort: sampleOptions[0],
        });
      })
    );
  });

  describe('Filter & Sort', () => {
    it(
      'should close the sort menu on filter toggle',
      waitForAsync(() => {
        component.filterOptions = sampleOptions;
        component.sortOptions = sampleOptions;
        fixture.detectChanges();

        const sortToggle =
          fixture.nativeElement.querySelector('.moe-sort-toggle');
        sortToggle.click();
        fixture.detectChanges();
        expect(
          fixture.nativeElement.querySelector('.moe-sort-options')
        ).toBeTruthy();

        const filterToggle =
          fixture.nativeElement.querySelector('.moe-filter-toggle');
        filterToggle.click();
        fixture.detectChanges();
        expect(
          fixture.nativeElement.querySelector('.moe-sort-options')
        ).toBeFalsy();
      })
    );

    it(
      'should close the filter menu on sort toggle',
      waitForAsync(() => {
        component.filterOptions = sampleOptions;
        component.sortOptions = sampleOptions;
        fixture.detectChanges();

        const filterToggle =
          fixture.nativeElement.querySelector('.moe-filter-toggle');
        filterToggle.click();
        fixture.detectChanges();
        expect(
          fixture.nativeElement.querySelector('.moe-filter-options')
        ).toBeTruthy();

        const sortToggle =
          fixture.nativeElement.querySelector('.moe-sort-toggle');
        sortToggle.click();
        fixture.detectChanges();
        expect(
          fixture.nativeElement.querySelector('.moe-filter-options')
        ).toBeFalsy();
      })
    );
  });
});
