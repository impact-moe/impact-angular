/**
 * @fileoverview A header to display a title and rarity, esp. for weapons and
 * artifacts on entity pages.
 */

import { Component, Input } from '@angular/core';

@Component({
  selector: 'moe-item-header',
  templateUrl: './item-header.component.html',
  styleUrls: ['./item-header.component.scss'],
})
export class ItemHeaderComponent {
  @Input() name!: string;
  @Input() rarity!: number;
}
