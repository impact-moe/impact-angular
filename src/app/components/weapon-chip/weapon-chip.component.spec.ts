import { MoeRarityStubComponent } from '@/components/rarity/rarity.component.stub';
import { RouterTestingModule } from '@angular/router/testing';
import { WeaponChipComponent } from './weapon-chip.component';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { WeaponSummary } from '@/viewmodels/weapon-summary.model';

describe('WeaponChipComponent', () => {
  let fixture: ComponentFixture<WeaponChipComponent>;
  let component: WeaponChipComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [MoeRarityStubComponent, WeaponChipComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WeaponChipComponent);
    component = fixture.componentInstance;
  });

  it(
    'should float the correct url over the chip',
    waitForAsync(() => {
      const weaponModel = new WeaponSummary.Builder('aquila-favonia').build();
      component.weapon = weaponModel;
      fixture.detectChanges();

      expect(
        fixture.nativeElement.querySelector('.weapon-page-link').href
      ).toContain('/weapons/aquila-favonia');
    })
  );

  it(
    'should display the expected name',
    waitForAsync(() => {
      const weaponModel = new WeaponSummary.Builder('aquila-favonia')
        .setName('Aquila Favonia')
        .build();
      component.weapon = weaponModel;
      fixture.detectChanges();

      expect(
        fixture.nativeElement.querySelector('.weapon-chip-name').textContent
      ).toContain('Aquila Favonia');
    })
  );

  it(
    'should always display a base attack value',
    waitForAsync(() => {
      const weaponModel = new WeaponSummary.Builder('aquila-favonia').build();
      component.weapon = weaponModel;
      fixture.detectChanges();

      expect(
        fixture.nativeElement.querySelector('.base-attack-label')
      ).toBeTruthy();
      expect(
        fixture.nativeElement.querySelector('.base-attack-value').textContent
      ).toContain('0');
    })
  );

  it(
    'should display the expected base attack value',
    waitForAsync(() => {
      const weaponModel = new WeaponSummary.Builder('aquila-favonia')
        .setBaseAttack(999)
        .build();
      component.weapon = weaponModel;
      fixture.detectChanges();

      expect(
        fixture.nativeElement.querySelector('.base-attack-value').textContent
      ).toContain('999');
    })
  );

  it(
    'should not display the substat if no values are set',
    waitForAsync(() => {
      const weaponModel = new WeaponSummary.Builder('aquila-favonia').build();
      component.weapon = weaponModel;
      fixture.detectChanges();

      expect(fixture.nativeElement.querySelector('.substat-label')).toBeFalsy();
      expect(fixture.nativeElement.querySelector('.substat-value')).toBeFalsy();
    })
  );

  it(
    'should not display the substat if only the type is set',
    waitForAsync(() => {
      const weaponModel = new WeaponSummary.Builder('aquila-favonia')
        .setSubstatType('ATK %')
        .build();
      component.weapon = weaponModel;
      fixture.detectChanges();

      expect(fixture.nativeElement.querySelector('.substat-label')).toBeFalsy();
      expect(fixture.nativeElement.querySelector('.substat-value')).toBeFalsy();
    })
  );

  it(
    'should not display the substat if only the value is set',
    waitForAsync(() => {
      const weaponModel = new WeaponSummary.Builder('aquila-favonia')
        .setSubstatValue(100)
        .build();
      component.weapon = weaponModel;
      fixture.detectChanges();

      expect(fixture.nativeElement.querySelector('.substat-label')).toBeFalsy();
      expect(fixture.nativeElement.querySelector('.substat-value')).toBeFalsy();
    })
  );

  it(
    'should the substat if the type is set and the value is greater than zero',
    waitForAsync(() => {
      const weaponModel = new WeaponSummary.Builder('aquila-favonia')
        .setSubstatType('ATK %')
        .setSubstatValue(100)
        .build();
      component.weapon = weaponModel;
      fixture.detectChanges();

      expect(
        fixture.nativeElement.querySelector('.substat-label').textContent
      ).toContain('ATK %');
      expect(
        fixture.nativeElement.querySelector('.substat-value').textContent
      ).toContain('100');
    })
  );

  it(
    'should display the lowest rarity gradient if no value is set',
    waitForAsync(() => {
      const weaponModel = new WeaponSummary.Builder('aquila-favonia').build();
      component.weapon = weaponModel;
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
        const weaponModel = new WeaponSummary.Builder('aquila-favonia')
          .setRarity(x)
          .build();
        component.weapon = weaponModel;
        fixture.detectChanges();

        expect(
          fixture.nativeElement.querySelector(`.rarity${x}-gradient`)
        ).toBeTruthy();
      }
    })
  );

  it(
    'should display the weapon image',
    waitForAsync(() => {
      const weaponModel = new WeaponSummary.Builder('aquila-favonia')
        .setImageUrl('sword.webp')
        .build();
      component.weapon = weaponModel;
      fixture.detectChanges();

      const backgroundImage =
        fixture.nativeElement.querySelector('.weapon-chip-image').style
          .backgroundImage;
      expect(backgroundImage).toContain('sword.webp');
    })
  );
});
