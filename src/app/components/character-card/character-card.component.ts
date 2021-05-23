/**
 * @fileoverview A card to display the summary of a character.
 */

import { Component, Input } from '@angular/core';
import { CharacterCardModel } from './character-card.model';
import { UtilityService } from '@/services/utility.service';

@Component({
  selector: 'moe-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent {
  @Input() character!: CharacterCardModel;

  constructor(private utilityService: UtilityService) { }

  get formattedLink() {
    return `/characters/${this.character.id}`;
  }

  get formattedHoverImage() {
    if (!this.character || !this.character.element) return '';

    return this.utilityService.getElementImage(this.character.element);
  }

  get formattedTierImage() {
    if (!this.character || !this.character.tier) return '';

    return this.utilityService.getTierImage32(this.character.tier);
  }
}
