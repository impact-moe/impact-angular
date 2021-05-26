/**
 * @fileoverview Provides a testing stub for MoeRarityComponent.
 */

import { Component, Input } from '@angular/core';

@Component({ selector: 'moe-rarity', template: '' })
export class MoeRarityStubComponent {
  @Input() rarity!: number;
}
