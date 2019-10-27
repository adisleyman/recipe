import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateChefComponent } from './private-chef.component';

describe('PrivateChefComponent', () => {
  let component: PrivateChefComponent;
  let fixture: ComponentFixture<PrivateChefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateChefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateChefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
