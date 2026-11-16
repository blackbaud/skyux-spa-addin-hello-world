import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkyThemeService } from '@skyux/theme';

import { MyBoxComponent } from './my-box.component';

describe('MyBoxComponent', () => {
  let component: MyBoxComponent;
  let fixture: ComponentFixture<MyBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyBoxComponent],
      providers: [SkyThemeService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
