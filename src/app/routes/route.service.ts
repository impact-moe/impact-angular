/**
 * @fileoverview Centralizes route data for a more consistent nav experience.
 */

import { MoeRoute } from './route.model';

const charactersRoute: MoeRoute = new MoeRoute.Builder()
  .setLabel('characters')
  .setPath('/character-list')
  .build();

const weaponsRoute: MoeRoute = new MoeRoute.Builder()
  .setLabel('weapons')
  .setPath('/weapon-list')
  .build();

const artifactsRoute: MoeRoute = new MoeRoute.Builder()
  .setLabel('artifacts')
  .setPath('/artifact-list')
  .build();

const statisticsRoute: MoeRoute = new MoeRoute.Builder()
  .setLabel('statistics')
  .setPath('/statistics')
  .build();

export namespace MoeRouteService {
  export const mainNavList: Array<MoeRoute> = [
    charactersRoute,
    weaponsRoute,
    artifactsRoute,
    statisticsRoute,
  ];
}
