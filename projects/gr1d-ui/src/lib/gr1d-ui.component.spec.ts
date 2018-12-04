import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gr1dUiComponent } from './gr1d-ui.component';

describe('Gr1dUiComponent', () => {
  let component: Gr1dUiComponent;
  let fixture: ComponentFixture<Gr1dUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gr1dUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gr1dUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
