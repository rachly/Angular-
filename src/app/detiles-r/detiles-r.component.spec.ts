import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetilesRComponent } from './detiles-r.component';

describe('DetilesRComponent', () => {
  let component: DetilesRComponent;
  let fixture: ComponentFixture<DetilesRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetilesRComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetilesRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
