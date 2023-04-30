import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldestPersonComponent } from './oldest-person.component';

describe('OldestPersonComponent', () => {
  let component: OldestPersonComponent;
  let fixture: ComponentFixture<OldestPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OldestPersonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OldestPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
