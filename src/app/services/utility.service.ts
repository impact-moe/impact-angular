import { Injectable } from '@angular/core';
import { Region } from '../enums/region.enum';
import { Element } from '../enums/element.enum';
import { WeaponType } from '../enums/weapon-type.enum';
import { ArtifactType } from '../enums/artifact-type.enum';
import { Talent } from '../models/talent.model';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  private baseUrl = 'https://media.impact.moe/';

  getRegionBannerUrl(region: Region) {
    if (region === Region.Mondstadt)
      return this.baseUrl + 'img/map-banners/mondstadt-banner.png';
    if (region === Region.Liyue)
      return this.baseUrl + 'img/map-banners/liyue-banner.png';

    return this.baseUrl + 'img/map-banners/mondstadt-banner.png';
  }

  getTierImage(tier: string) {
    if (tier)
      return this.baseUrl + 'img/tier-icons/tier-' + tier + '.png';

    return '';
  }

  getTierImage32(tier: string) {
    if (tier)
      return this.baseUrl + 'img/tier-icons/tier-' + tier + '-32.png';

    return '';
  }

  getWeaponTypeImage(weaponType: WeaponType) {
    if (weaponType === WeaponType.Bow)
      return this.baseUrl + 'img/weapon-type-icons/bow.png';
    if (weaponType === WeaponType.Catalyst)
      return this.baseUrl + 'img/weapon-type-icons/catalyst.png';
    if (weaponType === WeaponType.Claymore)
      return this.baseUrl + 'img/weapon-type-icons/claymore.png';
    if (weaponType === WeaponType.Polearm)
      return this.baseUrl + 'img/weapon-type-icons/polearm.png';
    if (weaponType === WeaponType.Sword)
      return this.baseUrl + 'img/weapon-type-icons/sword.png';

    return '';
  }

  getElementImage(element: Element) {
    if (element === Element.Anemo)
      return this.baseUrl + 'img/element-icons/anemo-icon.png';
    if (element === Element.Cryo)
      return this.baseUrl + 'img/element-icons/cryo-icon.png';
    if (element === Element.Dendro)
      return this.baseUrl + 'img/element-icons/dendro-icon.png';
    if (element === Element.Electro)
      return this.baseUrl + 'img/element-icons/electro-icon.png';
    if (element === Element.Geo)
      return this.baseUrl + 'img/element-icons/geo-icon.png';
    if (element === Element.Hydro)
      return this.baseUrl + 'img/element-icons/hydro-icon.png';
    if (element === Element.Pyro)
      return this.baseUrl + 'img/element-icons/pyro-icon.png';

    return '';
  }

  getElementHoverBackground(element: Element) {
    if (element === Element.Anemo)
      return 'hover-background-anemo';
    if (element === Element.Cryo)
      return 'hover-background-cryo';
    if (element === Element.Dendro)
      return 'hover-background-dendro';
    if (element === Element.Electro)
      return 'hover-background-electro';
    if (element === Element.Geo)
      return 'hover-background-geo';
    if (element === Element.Hydro)
      return 'hover-background-hydro';
    if (element === Element.Pyro)
      return 'hover-background-pyro';

    return '';
  }

  getElementBackground(element: Element) {
    if (element === Element.Anemo)
      return 'background-anemo';
    if (element === Element.Cryo)
      return 'background-cryo';
    if (element === Element.Dendro)
      return 'background-dendro';
    if (element === Element.Electro)
      return 'background-electro';
    if (element === Element.Geo)
      return 'background-geo';
    if (element === Element.Hydro)
      return 'background-hydro';
    if (element === Element.Pyro)
      return 'background-pyro';

    return '';
  }

  getArtifactImage64(artifactType: ArtifactType) {
    if (artifactType === ArtifactType.Feather)
      return this.baseUrl + 'img/artifact-icons/feather-64.png';
    if (artifactType === ArtifactType.Circlet)
      return this.baseUrl + 'img/artifact-icons/circlet-64.png';
    if (artifactType === ArtifactType.Flower)
      return this.baseUrl + 'img/artifact-icons/flower-64.png';
    if (artifactType === ArtifactType.Goblet)
      return this.baseUrl + 'img/artifact-icons/goblet-64.png';
    if (artifactType === ArtifactType.Sands)
      return this.baseUrl + 'img/artifact-icons/sands-64.png';

    return '';
  }

  getTalentByType(type: string, talents: Array<Talent>) {
    for (let talent of talents) {
      if (talent.Type === type) {
        return talent;
      }
    }

    return undefined;
  }

  getRarityBackground(rarity: number) {
    return 'background-rarity-' + rarity.toString();
  }

  getRarityHoverBackground(rarity: number) {
    return 'hover-background-rarity-' + rarity.toString();
  }
}
