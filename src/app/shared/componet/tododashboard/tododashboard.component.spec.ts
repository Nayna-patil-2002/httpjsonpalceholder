import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TododashboardComponent } from './tododashboard.component';

describe('TododashboardComponent', () => {
  let component: TododashboardComponent;
  let fixture: ComponentFixture<TododashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TododashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TododashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
