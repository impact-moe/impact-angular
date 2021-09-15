import { UtilityService } from '@/services/utility.service';
import { Role } from '@/models/role.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'moe-character-build',
  templateUrl: './character-build.component.html',
  styleUrls: ['./character-build.component.scss'],
})
export class CharacterBuildComponent implements OnInit {
  @Input() role!: Role;
  @Input() isRecommended?: boolean;

  isExpanded = true;

  constructor(public utilityService: UtilityService) {}

  ngOnInit() {
    this.isRecommended = !!this.isRecommended;
  }

  toggleView() {
    this.isExpanded = !this.isExpanded;
  }

  get toggleIcon() {
    return this.isExpanded ? 'expand_less' : 'expand_more';
  }
}
