/**
 * @fileoverview A basic module to display a route via an <a> element.
 */

import { Component, Input } from '@angular/core';
import { MoeRoute } from '@/routes/route.model';

export enum RouteButtonStyle {
  BUTTON,
  LINE_ITEM
}

@Component({
  selector: 'moe-route-button',
  templateUrl: './route-button.component.html',
  styleUrls: ['./route-button.component.scss']
})
export class RouteButtonComponent {
  readonly buttonStyles = RouteButtonStyle;

  @Input() route!: MoeRoute;
  @Input() style?: RouteButtonStyle;

  getStyle() {
    // Set a default style application if none was specified.
    return !!this.style ? this.style : RouteButtonStyle.BUTTON;
  }
}
