/**
 * @fileoverview Helper Pipe to transform a numeric length into an array of
 * that length (sans content), allowing us to repeat DOM elements.
 */

import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'multiply' })
export class MultiplierPipe implements PipeTransform {
  transform(value: number): Array<any> {
    const length = Math.max(value, 1);

    return new Array(length);
  }
}
