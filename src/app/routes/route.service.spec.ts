import { waitForAsync } from '@angular/core/testing';
import { MoeRouteService } from './route.service';

describe('MoeRouteService', () => {
  it(
    'should create the expected number of main navigation items',
    waitForAsync(() => {
      const mainNavList = MoeRouteService.mainNavList;
      expect(mainNavList.length).toBe(4);
    })
  );

  it(
    'should create the expected list of main navigation items',
    waitForAsync(() => {
      const mainNavList = MoeRouteService.mainNavList;

      // NOTE(vikarina): Order does matter here so it's should be safe to assert
      // the content wrt index like so.

      expect(mainNavList[0].path).toBe('/character-list');
      expect(mainNavList[0].label).toBe('characters');

      expect(mainNavList[1].path).toBe('/weapon-list');
      expect(mainNavList[1].label).toBe('weapons');

      expect(mainNavList[2].path).toBe('/artifact-list');
      expect(mainNavList[2].label).toBe('artifacts');

      expect(mainNavList[3].path).toBe('/statistics');
      expect(mainNavList[3].label).toBe('statistics');
    })
  );
});
