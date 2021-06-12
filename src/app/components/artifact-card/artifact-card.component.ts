/**
 * @fileoverview A card to display the summary of an artifact.
 */

import { Component, Input } from '@angular/core';
import { ArtifactSummary } from './artifact-summary.model';

@Component({
  selector: 'moe-artifact-card',
  templateUrl: './artifact-card.component.html',
  styleUrls: ['./artifact-card.component.scss'],
})
export class ArtifactCardComponent {
  @Input() artifact!: ArtifactSummary;

  get formattedLink() {
    return `/artifacts/${this.artifact.id}`;
  }
}
