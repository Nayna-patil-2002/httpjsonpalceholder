import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDashoboardComponent } from './movie-dashoboard.component';

describe('MovieDashoboardComponent', () => {
  let component: MovieDashoboardComponent;
  let fixture: ComponentFixture<MovieDashoboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieDashoboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieDashoboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
