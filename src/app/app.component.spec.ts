import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Router, provideRouter } from '@angular/router';
import { AppComponent } from './app.component';

@Component({
    selector: 'app-mock-shell',
    changeDetection: ChangeDetectionStrategy.Eager,
    template: '<div class="hello-test">Hello</div>'
})
class AppRouteTestComponent { }

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppComponent,
        AppRouteTestComponent
      ],
      providers: [
        provideRouter([
          {
            component: AppRouteTestComponent,
            path: ''
          }
        ])
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should contain a router outlet', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    const compiled = fixture.nativeElement;

    const router = TestBed.inject(Router);
    await router.navigate(['']);
    fixture.detectChanges();

    expect(
      compiled.querySelector('.hello-test').textContent
    ).toContain('Hello');
  });
});
