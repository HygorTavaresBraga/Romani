import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditReserveComponent } from './edit-reserve.component';

describe('EditReserveComponent', () => {
  let component: EditReserveComponent;
  let fixture: ComponentFixture<EditReserveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditReserveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditReserveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
