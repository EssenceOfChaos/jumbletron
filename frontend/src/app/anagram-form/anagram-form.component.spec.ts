import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnagramFormComponent } from './anagram-form.component';

describe('AnagramFormComponent', () => {
  let component: AnagramFormComponent;
  let fixture: ComponentFixture<AnagramFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnagramFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnagramFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
