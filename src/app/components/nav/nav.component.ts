import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';

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
