import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShelterlistComponent } from './shelterlist.component';

describe('ShelterlistComponent', () => {
  let component: ShelterlistComponent;
  let fixture: ComponentFixture<ShelterlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShelterlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShelterlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
