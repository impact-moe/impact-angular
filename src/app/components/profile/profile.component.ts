import { AuthResponse } from '@/models/auth/auth-response.model';
import { Character } from '@/models/character.model';
import { AuthService } from '@/services/auth.service';
import { UserService } from '@/services/user.service';
import { UtilityService } from '@/services/utility.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChartType } from 'angular-google-charts';
import { Artifact } from 'src/app/models/artifact.model';
import { User } from 'src/app/models/user.model';
import { ImpactService } from 'src/app/services/impact.service';

@Component({
  selector: 'app-profile-component',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  user?: User;
  chartType = ChartType.AreaChart;
  testData = [
    [1, Math.random()],
    [2, Math.random()],
    [3, Math.random()],
    [4, Math.random()],
    [5, Math.random()],
    [6, Math.random()],
    [7, Math.random()],
    [8, Math.random()],
    [9, Math.random()],
    [10, Math.random()],
    [11, Math.random()],
    [12, Math.random()],
    [13, Math.random()],
    [14, Math.random()],
    [15, Math.random()],
    [16, Math.random()],
    [17, Math.random()],
    [18, Math.random()],
    [19, Math.random()],
    [20, Math.random()],
  ];
  testOptions = {
    colors: ['#112359'],
    bar: { groupWidth: '10%' },
    legend: { position: 'none' },
    backgroundColor: { fill: 'transparent' },
    hAxis: {
      gridlines: { count: 0 },
      textPosition: 'none',
      baselineColor: 'none',
    },
    vAxis: {
      gridlines: { count: 0 },
      textPosition: 'none',
      color: 'transparent',
    },
    chartArea: { width: '100%', height: '100%' },
  };
  pageId?: string;

  constructor(
    private route: ActivatedRoute,
    private impactService: ImpactService,
    public utilityService: UtilityService,
    public userService: UserService,
    public authService: AuthService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.pageId = params.pageId;

      this.userService.getUser(params.userId).subscribe((user: User) => {
        this.user = user;
      });
    });
  }

  saveAccountChanges() {
    if (!this.user) return;

    this.authService.updateUser(this.user).subscribe((user: User) => {
      this.userService.setCurrentUserStorage(user);

      this.user = JSON.parse(JSON.stringify(this.userService.currentUser));
    });
  }
}
