import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBoxComponent } from './my-box.component';

describe('MyBoxComponent', () => {
  let component: MyBoxComponent;
  let fixture: ComponentFixture<MyBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyBoxComponent]
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
