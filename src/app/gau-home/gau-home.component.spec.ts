import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GauHomeComponent } from './gau-home.component';

describe('GauHomeComponent', () => {
  let component: GauHomeComponent;
  let fixture: ComponentFixture<GauHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GauHomeComponent]
    });
    fixture = TestBed.createComponent(GauHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
