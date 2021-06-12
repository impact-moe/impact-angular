import { ArtifactSummary } from '@/components/artifact-card/artifact-summary.model';
import { waitForAsync } from '@angular/core/testing';

describe('ArtifactSummary', () => {
  const royalPlume = new ArtifactSummary.Builder('royal-plume')
    .setName('Royal Plume')
    .setSetTitle('Noblesse Oblige')
    .build();

  it(
    'should match an empty string',
    waitForAsync(() => {
      expect(royalPlume.hasTextInSetOrName('')).toBe(true);
    })
  );

  it(
    'should match by name a string exactly',
    waitForAsync(() => {
      expect(royalPlume.hasTextInSetOrName('Royal Plume')).toBe(true);
    })
  );

  it(
    'should match by name if the text is in the middle of a string',
    waitForAsync(() => {
      expect(royalPlume.hasTextInSetOrName('Plu')).toBe(true);
    })
  );

  it(
    'should match by name without case sensitivity',
    waitForAsync(() => {
      expect(royalPlume.hasTextInSetOrName('royal plume')).toBe(true);
    })
  );

  it(
    'should match by set title a string exactly',
    waitForAsync(() => {
      expect(royalPlume.hasTextInSetOrName('Noblesse Oblige')).toBe(true);
    })
  );

  it(
    'should match by set title if the text is in the middle of a string',
    waitForAsync(() => {
      expect(royalPlume.hasTextInSetOrName('Obl')).toBe(true);
    })
  );

  it(
    'should match by set title without case sensitivity',
    waitForAsync(() => {
      expect(royalPlume.hasTextInSetOrName('noblesse oblige')).toBe(true);
    })
  );

  describe('Comparator', () => {
    it(
      'should sort by rarity descending',
      waitForAsync(() => {
        const leastRare = new ArtifactSummary.Builder('artifact1')
          .setRarity(1)
          .build();
        const avgRare = new ArtifactSummary.Builder('artifact2')
          .setRarity(2)
          .build();
        const mostRare = new ArtifactSummary.Builder('artifact3')
          .setRarity(3)
          .build();

        const sortedArray = [leastRare, avgRare, mostRare].sort(
          ArtifactSummary.getComparator(ArtifactSummary.Sort.RARITY_DESCENDING)
        );
        expect(sortedArray[0]).toBe(mostRare);
        expect(sortedArray[1]).toBe(avgRare);
        expect(sortedArray[2]).toBe(leastRare);
      })
    );

    it(
      'should sort by set title alphabetically',
      waitForAsync(() => {
        const setA = new ArtifactSummary.Builder('artifact1')
          .setSetTitle('A')
          .build();
        const setB = new ArtifactSummary.Builder('artifact2')
          .setSetTitle('B')
          .build();
        const setZ = new ArtifactSummary.Builder('artifact3')
          .setSetTitle('Z')
          .build();

        const sortedArray = [setB, setZ, setA].sort(
          ArtifactSummary.getComparator(ArtifactSummary.Sort.RARITY_DESCENDING)
        );
        expect(sortedArray[0]).toBe(setA);
        expect(sortedArray[1]).toBe(setB);
        expect(sortedArray[2]).toBe(setZ);
      })
    );
  });
});
