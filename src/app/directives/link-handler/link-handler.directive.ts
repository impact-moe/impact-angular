import { AfterViewInit, Directive, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[linkHandler]'
})
export class LinkHandlerDirective implements AfterViewInit {
  constructor(private elementRef: ElementRef, private router: Router) { }

  ngAfterViewInit() {
    const children = this.elementRef.nativeElement.getElementsByTagName('a');

    for (const child of children) {
      if (child.hostname === window.location.hostname) {
        child.addEventListener('click', (event: MouseEvent) => {
          this.router.navigate([child.pathname]);
          event.preventDefault();
        });
      }
    }
  }
}
