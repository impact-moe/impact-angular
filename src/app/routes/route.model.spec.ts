import { waitForAsync } from '@angular/core/testing';
import { MoeRoute } from './route.model';

describe('MoeRouteModel', () => {
  it(
    'should configure a valid empty route object',
    waitForAsync(() => {
      const route = new MoeRoute.Builder().build();

      expect(route.path).toBe('/');
      expect(route.label).toBe('');
    })
  );

  it(
    'should configure a route with a given path',
    waitForAsync(() => {
      const route = new MoeRoute.Builder().setPath('/some-endpoint').build();

      expect(route.path).toBe('/some-endpoint');
      expect(route.label).toBe('');
    })
  );

  it(
    'should configure a route with a given label',
    waitForAsync(() => {
      const route = new MoeRoute.Builder().setLabel('coolbeans').build();

      expect(route.path).toBe('/');
      expect(route.label).toBe('coolbeans');
    })
  );
});
