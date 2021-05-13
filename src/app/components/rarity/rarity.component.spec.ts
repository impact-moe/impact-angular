import { MultiplierPipe } from '@/pipes/multiplier.pipe';
import { MoeRarityComponent } from './rarity.component';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

describe('MoeRarityComponent', () => {
  let fixture: ComponentFixture<MoeRarityComponent>;
  let component: MoeRarityComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultiplierPipe, MoeRarityComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MoeRarityComponent);
    component = fixture.componentInstance;
  });

  it('should display the expected number of stars', waitForAsync(() => {
    for (let stars = 1; stars <= 5; stars++) {
      component.value = stars;
      fixture.detectChanges();

      expect(fixture.nativeElement.getElementsByClassName('moe-star-element').length).toBe(stars);
    }
  }));
});
