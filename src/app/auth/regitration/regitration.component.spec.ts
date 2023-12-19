import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegitrationComponent } from './regitration.component';

describe('RegitrationComponent', () => {
  let component: RegitrationComponent;
  let fixture: ComponentFixture<RegitrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegitrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegitrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
