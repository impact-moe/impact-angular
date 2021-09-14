import { UtilityService } from '@/services/utility.service';
import { Role } from '@/models/role.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'moe-character-build',
  templateUrl: './character-build.component.html',
  styleUrls: ['./character-build.component.scss'],
})
export class CharacterBuildComponent {
  @Input() role!: Role;

  constructor(public utilityService: UtilityService) {}
}
