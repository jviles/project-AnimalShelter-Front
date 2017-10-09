import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalprofilePageComponent } from './animalprofile-page.component';

describe('AnimalprofilePageComponent', () => {
  let component: AnimalprofilePageComponent;
  let fixture: ComponentFixture<AnimalprofilePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalprofilePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalprofilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
