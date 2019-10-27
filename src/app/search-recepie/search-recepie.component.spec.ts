import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchRecepieComponent } from './search-recepie.component';

describe('SearchRecepieComponent', () => {
  let component: SearchRecepieComponent;
  let fixture: ComponentFixture<SearchRecepieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchRecepieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchRecepieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
