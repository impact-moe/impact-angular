import { MoeRarityStubComponent } from '@/components/rarity/rarity.component.stub';
import { ArtifactSetSummary } from '@/viewmodels/artifact-set.model';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ArtifactChipComponent } from './artifact-chip.component';

describe('ArtifactChipComponent', () => {
  let fixture: ComponentFixture<ArtifactChipComponent>;
  let component: ArtifactChipComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [MoeRarityStubComponent, ArtifactChipComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ArtifactChipComponent);
    component = fixture.componentInstance;
  });

  it(
    'should display the expected set name',
    waitForAsync(() => {
      const setModel = new ArtifactSetSummary.Builder('archaic-petra')
        .setName('Archaic Petra')
        .build();
      component.artifactSet = setModel;
      fixture.detectChanges();

      expect(
        fixture.nativeElement.querySelector('.artifact-set-name').textContent
      ).toContain('Archaic Petra');
    })
  );

  it(
    'should display the four piece annotation by default',
    waitForAsync(() => {
      const setModel = new ArtifactSetSummary.Builder('archaic-petra')
        .setName('Archaic Petra')
        .build();
      component.artifactSet = setModel;
      fixture.detectChanges();

      expect(
        fixture.nativeElement.querySelector('.artifact-set-name').textContent
      ).toContain('Archaic Petra (4)');
    })
  );

  it(
    'should display the two piece annotation when specified',
    waitForAsync(() => {
      const setModel = new ArtifactSetSummary.Builder('archaic-petra')
        .setName('Archaic Petra')
        .build();
      component.artifactSet = setModel;
      component.hideFourPieceBonus = true;
      fixture.detectChanges();

      expect(
        fixture.nativeElement.querySelector('.artifact-set-name').textContent
      ).toContain('Archaic Petra (2)');
    })
  );

  it(
    'should always display the two piece bonus',
    waitForAsync(() => {
      const setModel = new ArtifactSetSummary.Builder('archaic-petra')
        .setTwoPieceBonus('2pc bonus')
        .build();
      component.artifactSet = setModel;
      fixture.detectChanges();

      expect(
        fixture.nativeElement.querySelector('.two-piece-bonus').textContent
      ).toContain('2pc bonus');
    })
  );

  it(
    'should display the four piece bonus by default',
    waitForAsync(() => {
      const setModel = new ArtifactSetSummary.Builder('archaic-petra')
        .setFourPieceBonus('4pc bonus')
        .build();
      component.artifactSet = setModel;
      fixture.detectChanges();

      expect(
        fixture.nativeElement.querySelector('.four-piece-bonus').textContent
      ).toContain('4pc bonus');
    })
  );

  it(
    'should hide the four piece bonus when specified',
    waitForAsync(() => {
      const setModel = new ArtifactSetSummary.Builder('archaic-petra')
        .setFourPieceBonus('4pc bonus')
        .build();
      component.artifactSet = setModel;
      component.hideFourPieceBonus = true;
      fixture.detectChanges();

      expect(
        fixture.nativeElement.querySelector('.four-piece-bonus')
      ).toBeFalsy();
    })
  );
});
