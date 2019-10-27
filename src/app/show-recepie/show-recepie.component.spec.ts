import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRecepieComponent } from './show-recepie.component';

describe('ShowRecepieComponent', () => {
  let component: ShowRecepieComponent;
  let fixture: ComponentFixture<ShowRecepieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowRecepieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowRecepieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
