import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImpactService } from '@/services/impact.service';
import { UtilityService } from '@/services/utility.service';
import { Weapon } from 'src/app/models/weapon.model';

@Component({
  selector: 'app-weapon',
  templateUrl: './weapon.component.html',
  styleUrls: ['./weapon.component.scss'],
})
export class WeaponComponent implements OnInit {
  weapon?: Weapon;

  constructor(
    private route: ActivatedRoute,
    private impactService: ImpactService,
    public utilityService: UtilityService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (!params.weaponId) return;

      this.impactService.getWeapon(params.weaponId, 'stats').subscribe(data => {
        this.weapon = data;
      });
    });
  }
}
