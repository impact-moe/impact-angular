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
  pageId = 'overview';

  constructor(
    private route: ActivatedRoute,
    private impactService: ImpactService,
    public utilityService: UtilityService
  ) {}

  hasData() {
    return !!this.weapon;
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (!params.weaponId) return;

      if (params.pageId === 'overview') {
        this.impactService
          .getWeapon(params.weaponId, 'stats')
          .subscribe(data => {
            this.weapon = data;

            this.pageId = params.pageId;
          });
      } else if (params.pageId === 'materials') {
        this.impactService
          .getWeapon(params.weaponId, 'stats')
          .subscribe(data => {
            this.weapon = data;

            this.pageId = params.pageId;
          });
      }
    });
  }
}
