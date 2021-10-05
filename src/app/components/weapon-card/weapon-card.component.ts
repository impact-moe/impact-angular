/**
 * @fileoverview A card to display the summary of a weapon.
 */

import { Component, Input } from '@angular/core';
import { WeaponSummary } from '@/viewmodels/weapon-summary.model';

@Component({
  selector: 'moe-weapon-card',
  templateUrl: './weapon-card.component.html',
  styleUrls: ['./weapon-card.component.scss'],
})
export class WeaponCardComponent {
  @Input() weapon!: WeaponSummary;

  get formattedLink() {
    return `/weapons/${this.weapon.id}`;
  }

  hasSubstat() {
    return !!this.weapon.substatType && this.weapon.substatValue > 0;
  }
}
