import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MoeRoute } from '@/routes/route.model';
import { RouteButtonStyle, RouteButtonComponent } from './route-button.component';

describe('RouteButtonComponent', () => {
  const testRoute: MoeRoute = new MoeRoute.Builder().setLabel('test').setPath('/test').build();

  let fixture: ComponentFixture<RouteButtonComponent>;
  let component: RouteButtonComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [RouteButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RouteButtonComponent);
    component = fixture.componentInstance;
  });

  it('should display the correct route label', waitForAsync(() => {
    component.route = testRoute;
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.moe-route-label').textContent).toBe('test');
  }));

  it('should incorporate the correct path', waitForAsync(() => {
    component.route = testRoute;
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.moe-route-link').href).toContain('/test');
  }));

  it('should apply the BUTTON style by default', waitForAsync(() => {
    component.route = testRoute;
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.button-style')).toBeTruthy();
  }));

  it('should apply the BUTTON style when specified', waitForAsync(() => {
    component.route = testRoute;
    component.style = RouteButtonStyle.BUTTON;
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.button-style')).toBeTruthy();
  }));

  it('should apply the LINE_ITEM style when specified', waitForAsync(() => {
    component.route = testRoute;
    component.style = RouteButtonStyle.LINE_ITEM;
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.line-item-style')).toBeTruthy();
  }));
});
