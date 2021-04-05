import { Component, ElementRef, Input } from '@angular/core';
import { animate, AnimationBuilder, style } from '@angular/animations';

@Component({
  selector: '[appContentCard]',
  template: '<ng-content></ng-content>',
})
export class DropdownContentCardComponent {
  @Input() open = false;
  height = 0;

  constructor(
    private builder: AnimationBuilder,
    private elementRef: ElementRef
  ) {}

  ngAfterViewInit() {
    let buttonElement = this.elementRef.nativeElement.getElementsByClassName(
      'content-card-expand-button'
    )[0];
    let buttonImageElement = buttonElement.childNodes[0];
    let bodyElement = this.elementRef.nativeElement.getElementsByClassName(
      'content-card-body'
    )[0];
    let titleElement = this.elementRef.nativeElement.getElementsByClassName(
      'content-card-title'
    )[0];

    this.height = bodyElement.offsetHeight;

    bodyElement.style.height = this.open ? '' : '0px';
    bodyElement.style.padding = this.open ? '2em 2em 2em 2em' : '0 2em 0 2em';
    titleElement.style.borderBottomLeftRadius = this.open ? '0px' : '5px';
    titleElement.style.borderBottomRightRadius = this.open ? '0px' : '5px';
    buttonImageElement.style.transform = this.open ? 'rotate(180deg)  ' : '';

    buttonElement.addEventListener('click', () => {
      this.open = !this.open;

      if (!this.open) bodyElement.style.setProperty('height', '0px');

      this.builder
        .build(this.open ? this.rotateUp() : this.rotateDown())
        .create(buttonImageElement)
        .play();

      let factory = this.builder
        .build(this.open ? this.openBody() : this.closeBody())
        .create(bodyElement);

      if (this.open)
        factory.onDone(() => {
          bodyElement.style.setProperty('height', 'auto', 'important');
        });

      factory.play();

      titleElement.style.borderBottomLeftRadius = this.open ? '0px' : '5px';
      titleElement.style.borderBottomRightRadius = this.open ? '0px' : '5px';
    });
  }

  bodyContentChange() {
    let bodyElement = this.elementRef.nativeElement.getElementsByClassName(
      'content-card-body'
    )[0];
    this.height = bodyElement.offsetHeight;
  }

  rotateUp() {
    return [animate('0.2s ease', style({ transform: 'rotate(180deg)' }))];
  }

  rotateDown() {
    return [animate('0.2s ease', style({ transform: 'rotate(0deg)' }))];
  }

  openBody() {
    return [
      animate(
        '0.2s ease',
        style({
          height: this.height + 'px',
          padding: '2em 2em 2em 2em',
        })
      ),
    ];
  }

  closeBody() {
    return [
      animate(
        '0.2s ease',
        style({
          height: '0px',
          padding: '0 2em 0 2em',
        })
      ),
    ];
  }
}
