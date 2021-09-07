import { RouteButtonStyle } from '@/components/route-button/route-button.component';
import { Component } from '@angular/core';
import { MoeRoute } from '@/routes/route.model';
import { MoeRouteService } from '@/routes/route.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  readonly buttonStyles = RouteButtonStyle;
  readonly navList: Array<MoeRoute> = MoeRouteService.mainNavList;
  readonly loginRoute: MoeRoute = MoeRouteService.loginRoute;
  readonly signupRoute: MoeRoute = MoeRouteService.signupRoute;

  drawerOpen = false;

  openDrawer() {
    this.drawerOpen = true;
  }

  closeDrawer() {
    this.drawerOpen = false;
  }
}
