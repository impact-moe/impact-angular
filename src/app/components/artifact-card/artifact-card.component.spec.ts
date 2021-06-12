import { MoeRarityStubComponent } from '@/components/rarity/rarity.component.stub';
import { RouterTestingModule } from '@angular/router/testing';
import { ArtifactCardComponent } from './artifact-card.component';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ArtifactSummary } from './artifact-summary.model';
import { ArtifactType } from '@/enums/artifact-type.enum';

describe('ArtifactCardComponent', () => {
  let fixture: ComponentFixture<ArtifactCardComponent>;
  let component: ArtifactCardComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [MoeRarityStubComponent, ArtifactCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ArtifactCardComponent);
    component = fixture.componentInstance;
  });

  it(
    'should float the correct url over the card',
    waitForAsync(() => {
      const artifactModel = new ArtifactSummary.Builder('1').build();
      component.artifact = artifactModel;
      fixture.detectChanges();

      expect(
        fixture.nativeElement.querySelector('.artifact-page-link').href
      ).toContain('/artifacts/1');
    })
  );

  it(
    'should display the artifact name',
    waitForAsync(() => {
      const artifactModel = new ArtifactSummary.Builder('1')
        .setName('Royal Plume')
        .build();
      component.artifact = artifactModel;
      fixture.detectChanges();

      expect(
        fixture.nativeElement.querySelector('.artifact-card-name').textContent
      ).toContain('Royal Plume');
    })
  );

  it(
    'should display the artifact set title',
    waitForAsync(() => {
      const artifactModel = new ArtifactSummary.Builder('1')
        .setSetTitle('Noblesse Oblige')
        .build();
      component.artifact = artifactModel;
      fixture.detectChanges();

      expect(
        fixture.nativeElement.querySelector('.artifact-card-set-title')
          .textContent
      ).toContain('Noblesse Oblige');
    })
  );

  it(
    'should display the artifact type',
    waitForAsync(() => {
      const artifactModel = new ArtifactSummary.Builder('1')
        .setType(ArtifactType.Flower)
        .build();
      component.artifact = artifactModel;
      fixture.detectChanges();

      expect(
        fixture.nativeElement.querySelector('.artifact-card-type-label')
          .textContent
      ).toContain('Flower of Life');
    })
  );

  it(
    'should not display the rarity when not set',
    waitForAsync(() => {
      const artifactModel = new ArtifactSummary.Builder('1').build();
      component.artifact = artifactModel;
      fixture.detectChanges();

      expect(fixture.nativeElement.querySelector('moe-rarity')).toBeFalsy();
    })
  );

  it(
    'should display the rarity when it exists',
    waitForAsync(() => {
      const artifactModel = new ArtifactSummary.Builder('1')
        .setRarity(1)
        .build();
      component.artifact = artifactModel;
      fixture.detectChanges();

      expect(fixture.nativeElement.querySelector('moe-rarity')).toBeTruthy();
    })
  );

  it(
    'should display the lowest rarity gradient if no value is set',
    waitForAsync(() => {
      const artifactModel = new ArtifactSummary.Builder('1').build();
      component.artifact = artifactModel;
      fixture.detectChanges();

      expect(
        fixture.nativeElement.querySelector('.rarity1-gradient')
      ).toBeTruthy();
    })
  );

  it(
    'should display the expected rarity gradient',
    waitForAsync(() => {
      for (let x = 1; x <= 5; x++) {
        const artifactModel = new ArtifactSummary.Builder('1')
          .setRarity(x)
          .build();
        component.artifact = artifactModel;
        fixture.detectChanges();

        expect(
          fixture.nativeElement.querySelector(`.rarity${x}-gradient`)
        ).toBeTruthy();
      }
    })
  );

  it(
    'should not display the artifact image if not set',
    waitForAsync(() => {
      const artifactModel = new ArtifactSummary.Builder('1').build();
      component.artifact = artifactModel;
      fixture.detectChanges();

      expect(
        fixture.nativeElement.querySelector('.artifact-card-blur-image')
      ).toBeFalsy();
    })
  );

  it(
    'should display the artifact image when set',
    waitForAsync(() => {
      const artifactModel = new ArtifactSummary.Builder('1')
        .setImageUrl('artifact.webp')
        .build();
      component.artifact = artifactModel;
      fixture.detectChanges();

      expect(
        fixture.nativeElement.querySelector('.artifact-card-blur-image')
      ).toBeTruthy();
    })
  );
});
