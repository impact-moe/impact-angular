import { waitForAsync } from '@angular/core/testing';
import { WeaponSummary } from './weapon-summary.model';

describe('WeaponSummary', () => {
  const aquilaFavonia = new WeaponSummary.Builder('aquila-favonia').setName('Aquila Favonia').build();

  it(
  'should match an empty string',
    waitForAsync(() => {
      expect(aquilaFavonia.hasTextInName('')).toBe(true);
    }));

  it(
  'should match a string exactly',
    waitForAsync(() => {
      expect(aquilaFavonia.hasTextInName('Aquila Favonia')).toBe(true);
  }));

  it(
  'should match if the text is in the middle of a string',
    waitForAsync(() => {
      expect(aquilaFavonia.hasTextInName('Fav')).toBe(true);
  }));

  it(
  'should match without case sensitivity',
    waitForAsync(() => {
      expect(aquilaFavonia.hasTextInName('aquila favonia')).toBe(true);
  }));

  describe('Comparator', () => {
      it(
      'should sort by rarity descending',
        waitForAsync(() => {
          const leastRare = new WeaponSummary.Builder('weapon1').setRarity(1).build();
          const avgRare = new WeaponSummary.Builder('weapon2').setRarity(2).build();
          const mostRare = new WeaponSummary.Builder('weapon3').setRarity(3).build();

          const sortedArray = [leastRare, avgRare, mostRare].sort(WeaponSummary.getComparator(WeaponSummary.Sort.RARITY_DESCENDING));
          expect(sortedArray[0]).toBe(mostRare);
          expect(sortedArray[1]).toBe(avgRare);
          expect(sortedArray[2]).toBe(leastRare);
        }));

     it(
      'should sort by base attack descending',
        waitForAsync(() => {
          const weakAtk = new WeaponSummary.Builder('weapon1').setBaseAttack(0).build();
          const avgAtk = new WeaponSummary.Builder('weapon2').setBaseAttack(50).build();
          const strongAtk = new WeaponSummary.Builder('weapon3').setBaseAttack(100).build();

          const sortedArray = [weakAtk, strongAtk, avgAtk].sort(WeaponSummary.getComparator(WeaponSummary.Sort.BASE_ATK_DESCENDING));
          expect(sortedArray[0]).toBe(strongAtk);
          expect(sortedArray[1]).toBe(avgAtk);
          expect(sortedArray[2]).toBe(weakAtk);
        }));

     it(
      'should sort by substat value descending',
        waitForAsync(() => {
          const lowSubstat = new WeaponSummary.Builder('weapon1').setSubstatValue(0).build();
          const avgSubstat = new WeaponSummary.Builder('weapon2').setSubstatValue(50).build();
          const highSubstat = new WeaponSummary.Builder('weapon3').setSubstatValue(100).build();

          const sortedArray = [highSubstat, avgSubstat, lowSubstat].sort(WeaponSummary.getComparator(WeaponSummary.Sort.SUBSTAT_VALUE_DESCENDING));
          expect(sortedArray[0]).toBe(highSubstat);
          expect(sortedArray[1]).toBe(avgSubstat);
          expect(sortedArray[2]).toBe(lowSubstat);
        }));

     it(
      'should by name alphabetically',
       waitForAsync(() => {
          const weaponA = new WeaponSummary.Builder('weapon1').setName('A').build();
          const weaponB = new WeaponSummary.Builder('weapon2').setName('B').build();
          const weaponZ = new WeaponSummary.Builder('weapon3').setName('Z').build();

          const sortedArray = [weaponB, weaponZ, weaponA].sort(WeaponSummary.getComparator(WeaponSummary.Sort.ALPHABETICALLY));
          expect(sortedArray[0]).toBe(weaponA);
          expect(sortedArray[1]).toBe(weaponB);
          expect(sortedArray[2]).toBe(weaponZ);
      }));
  });
});
