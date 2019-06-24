import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchGeneratorComponent } from './search-generator.component';

describe('SearchGeneratorComponent', () => {
  let component: SearchGeneratorComponent;
  let fixture: ComponentFixture<SearchGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
