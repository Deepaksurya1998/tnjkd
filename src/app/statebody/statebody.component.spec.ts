import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatebodyComponent } from './statebody.component';

describe('StatebodyComponent', () => {
  let component: StatebodyComponent;
  let fixture: ComponentFixture<StatebodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatebodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatebodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
