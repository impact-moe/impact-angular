import { MoeRarityStubComponent } from '@/components/rarity/rarity.component.stub';
import { RouterTestingModule } from '@angular/router/testing';
import { CharacterCardComponent } from './character-card.component';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CharacterCardModel } from './character-card.model';
import { Element } from '@/enums/element.enum';

describe('CharacterCardComponent', () => {
  let fixture: ComponentFixture<CharacterCardComponent>;
  let component: CharacterCardComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [MoeRarityStubComponent, CharacterCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterCardComponent);
    component = fixture.componentInstance;
  });

  it('should float the correct url over the card', waitForAsync(() => {
    const characterModel = new CharacterCardModel.Builder('hu-tao').build();
    component.character = characterModel;
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.character-profile-link').href).toContain('/characters/hu-tao');
  }));

  it('should display the expected character name', waitForAsync(() => {
    const characterModel = new CharacterCardModel.Builder('hu-tao').setName('Hu Tao').build();
    component.character = characterModel;
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.character-card-name').textContent).toContain('Hu Tao');
  }));

  it('should not display the rarity if not set', waitForAsync(() => {
    const characterModel = new CharacterCardModel.Builder('hu-tao').build();
    component.character = characterModel;
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('moe-rarity')).toBeFalsy();
  }));

  it('should display the rarity when positive', waitForAsync(() => {
    const characterModel = new CharacterCardModel.Builder('hu-tao').setRarity(1).build();
    component.character = characterModel;
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('moe-rarity')).toBeTruthy();
  }));

  it('should display the image as a background image', waitForAsync(() => {
    const characterModel = new CharacterCardModel.Builder('hu-tao').setImageUrl('portrait.webp').build();
    component.character = characterModel;
    fixture.detectChanges();

    const backgroundImage = fixture.nativeElement.querySelector('.character-card-image-container').style.backgroundImage;
    expect(backgroundImage).toContain('portrait.webp');
  }));

  it('should not display the element hover image if not set', waitForAsync(() => {
    const characterModel = new CharacterCardModel.Builder('hu-tao').build();
    component.character = characterModel;
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.character-card-hover-image')).toBeFalsy();
  }));

  it('should display the element hover image when set', waitForAsync(() => {
    const characterModel = new CharacterCardModel.Builder('hu-tao').setElement(Element.Pyro).build();
    component.character = characterModel;
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.character-card-hover-image')).toBeTruthy();
  }));

  it('should not display the tier if not set', waitForAsync(() => {
    const characterModel = new CharacterCardModel.Builder('hu-tao').build();
    component.character = characterModel;
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.character-card-tier')).toBeFalsy();
  }));

  it('should display the tier when set', waitForAsync(() => {
    const characterModel = new CharacterCardModel.Builder('hu-tao').setTier('S').build();
    component.character = characterModel;
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.character-card-tier')).toBeTruthy();
  }));
});
