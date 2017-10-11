import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalsShelterComponent } from './animals-shelter.component';

describe('AnimalsShelterComponent', () => {
  let component: AnimalsShelterComponent;
  let fixture: ComponentFixture<AnimalsShelterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalsShelterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalsShelterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
