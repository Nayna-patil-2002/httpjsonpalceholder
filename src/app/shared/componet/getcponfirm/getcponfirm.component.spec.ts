import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetcponfirmComponent } from './getcponfirm.component';

describe('GetcponfirmComponent', () => {
  let component: GetcponfirmComponent;
  let fixture: ComponentFixture<GetcponfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetcponfirmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetcponfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
