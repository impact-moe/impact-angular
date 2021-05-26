import { CharacterCardModel } from '@/components/character-card/character-card.model';
import { Element } from '@/enums/element.enum';
import { Region } from '@/enums/region.enum';
import { CharacterOverview } from './character-overview.model';
import { Constellation } from './constellation.model';
import { Role } from './role.model';
import { Talent } from './talent.model';

export class Character {
  Id: string;
  Name: string;
  Rarity: number;
  Weapon: string;
  Element: Element;
  Region: Region;
  Description: string;
  Image: string;
  Icon: string;
  SquareCard: string;
  Quote: string;
  Title: string;
  Faction: string;
  Birthday: string;
  Constellation: string;
  ChineseVA: string;
  JapaneseVA: string;
  EnglishVA: string;
  KoreanVA: string;
  Tier: string;
  CharacterOverview?: CharacterOverview;
  Talents = new Array<Talent>();
  Constellations = new Array<Constellation>();
  Roles = new Array<Role>();

  constructor(characterJson: any) {
    this.Id = characterJson.id;
    this.Name = characterJson.name;
    this.Rarity = characterJson.rarity;
    this.Weapon = characterJson.weapon;
    this.Element = characterJson.element;
    this.Region = characterJson.region;
    this.Description = characterJson.description;
    this.Image = characterJson.image;
    this.Icon = characterJson.icon;
    this.SquareCard = characterJson.squareCard;
    this.Quote = characterJson.quote;
    this.Title = characterJson.title;
    this.Faction = characterJson.faction;
    this.Birthday = characterJson.birthday;
    this.Constellation = characterJson.constellation;
    this.ChineseVA = characterJson.chineseVA;
    this.JapaneseVA = characterJson.japaneseVA;
    this.EnglishVA = characterJson.englishVA;
    this.KoreanVA = characterJson.koreanVA;
    this.Tier = characterJson.tier;

    if (characterJson.characterOverview) {
      this.CharacterOverview = new CharacterOverview(
        characterJson.characterOverview
      );
    }

    if (characterJson.talents) {
      for (const talentJson of characterJson.talents) {
        this.Talents.push(new Talent(talentJson));
      }
    }

    if (characterJson.constellations) {
      for (const constellationJson of characterJson.constellations) {
        this.Constellations.push(new Constellation(constellationJson));
      }
    }

    if (characterJson.roles) {
      for (const roleJson of characterJson.roles) {
        this.Roles.push(new Role(roleJson));
      }
    }
  }

  toCharacterCardModel() {
    return new CharacterCardModel.Builder(this.Id)
      .setName(this.Name)
      .setRarity(this.Rarity)
      .setImageUrl(this.SquareCard)
      .setElement(this.Element)
      .setTier(this.Tier)
      .build();
  }
}
