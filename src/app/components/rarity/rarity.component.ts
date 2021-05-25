/**
 * @fileoverview A basic module to display the rarity rating via star icons.
 */

import { Component, Input } from '@angular/core';

@Component({
  selector: 'moe-rarity',
  templateUrl: './rarity.component.html',
  styleUrls: ['./rarity.component.scss'],
})
export class MoeRarityComponent {
  @Input() value!: number;
}
