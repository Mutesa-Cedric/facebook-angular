import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsBarComponent } from './notifications-bar.component';

describe('NotificationsBarComponent', () => {
  let component: NotificationsBarComponent;
  let fixture: ComponentFixture<NotificationsBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationsBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
