import { RouteButtonStyle } from '@/components/route-button/route-button.component';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';
import { MoeRoute } from '@/routes/route.model';
import { MoeRouteService } from '@/routes/route.service';
import { UserService } from '@/services/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  animations: [
    trigger('navDrawerOpenClose', [
      state(
        'navDrawerOpen',
        style({
          marginLeft: '0em',
        })
      ),
      state(
        'navDrawerClose',
        style({
          marginLeft: '-15em',
        })
      ),
      transition('navDrawerOpen => navDrawerClose', [animate('0.2s ease')]),
      transition('navDrawerClose => navDrawerOpen', [animate('0.2s ease')]),
    ]),
  ],
})
export class NavComponent {
  readonly buttonStyles = RouteButtonStyle;
  readonly navList: Array<MoeRoute> = MoeRouteService.mainNavList;

  constructor(public userService: UserService) {}

  drawerOpen = false;
  clickOverlayPointerEventsStyle = 'none';

  openDrawer() {
    this.clickOverlayPointerEventsStyle = 'auto';
    this.drawerOpen = true;
  }

  closeDrawer() {
    this.clickOverlayPointerEventsStyle = 'none';
    this.drawerOpen = false;
  }
}
