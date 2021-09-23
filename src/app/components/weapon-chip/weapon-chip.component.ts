/**
 * @fileoverview A chip to display the summary of a weapon.
 */

import { Component, Input } from '@angular/core';
import { WeaponSummary } from '@/viewmodels/weapon-summary.model';

@Component({
  selector: 'moe-weapon-chip',
  templateUrl: './weapon-chip.component.html',
  styleUrls: ['./weapon-chip.component.scss'],
})
export class WeaponChipComponent {
  @Input() weapon!: WeaponSummary;

  get formattedLink() {
    return `/weapons/${this.weapon.id}`;
  }

  hasSubstat() {
    return !!this.weapon.substatType && this.weapon.substatValue > 0;
  }
}
