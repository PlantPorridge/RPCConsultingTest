import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActurialFormComponent } from './acturial-form.component';

describe('ActurialFormComponent', () => {
  let component: ActurialFormComponent;
  let fixture: ComponentFixture<ActurialFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActurialFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActurialFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
