import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowalluserComponent } from './showalluser.component';

describe('ShowalluserComponent', () => {
  let component: ShowalluserComponent;
  let fixture: ComponentFixture<ShowalluserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowalluserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowalluserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
