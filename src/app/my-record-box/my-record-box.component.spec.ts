import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRecordBoxComponent } from './my-record-box.component';

describe('MyRecordBoxComponent', () => {
  let component: MyRecordBoxComponent;
  let fixture: ComponentFixture<MyRecordBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyRecordBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyRecordBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
