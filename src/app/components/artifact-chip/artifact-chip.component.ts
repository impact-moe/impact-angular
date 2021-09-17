/**
 * @fileoverview A chip to display the summary of an artifact set.
 */

import { Component, Input, OnInit } from '@angular/core';
import { ArtifactSetSummary } from './artifact-set.model';

@Component({
  selector: 'moe-artifact-chip',
  templateUrl: './artifact-chip.component.html',
  styleUrls: ['./artifact-chip.component.scss'],
})
export class ArtifactChipComponent implements OnInit {
  @Input() artifactSet!: ArtifactSetSummary;
  @Input() hideFourPieceBonus?: boolean;

  ngOnInit() {
    this.hideFourPieceBonus = !!this.hideFourPieceBonus;
  }

  get formattedTitle() {
    const pieces = this.hideFourPieceBonus ? '2' : '4';
    return `${this.artifactSet.name} (${pieces})`;
  }
}
