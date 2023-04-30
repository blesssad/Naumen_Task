import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeByNameCardComponent } from './age-by-name-card.component';

describe('AgeByNameCardComponent', () => {
  let component: AgeByNameCardComponent;
  let fixture: ComponentFixture<AgeByNameCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgeByNameCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgeByNameCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
