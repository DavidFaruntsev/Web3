import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiStatisticsComponent } from './api-statistics.component';

describe('ApiStatisticsComponent', () => {
  let component: ApiStatisticsComponent;
  let fixture: ComponentFixture<ApiStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiStatisticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
