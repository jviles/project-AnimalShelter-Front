import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimallistComponent } from './animallist.component';

describe('AnimallistComponent', () => {
  let component: AnimallistComponent;
  let fixture: ComponentFixture<AnimallistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimallistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimallistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
