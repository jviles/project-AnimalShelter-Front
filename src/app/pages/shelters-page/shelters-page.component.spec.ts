import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SheltersPageComponent } from './shelters-page.component';

describe('SheltersPageComponent', () => {
  let component: SheltersPageComponent;
  let fixture: ComponentFixture<SheltersPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SheltersPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheltersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
