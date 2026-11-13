import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkyThemeService } from '@skyux/theme';

import { MyTileComponent } from './my-tile.component';

describe('MyTileComponent', () => {
  let component: MyTileComponent;
  let fixture: ComponentFixture<MyTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyTileComponent],
      providers: [SkyThemeService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
