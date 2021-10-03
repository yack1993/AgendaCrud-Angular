import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonebookReadComponent } from './phonebook-read.component';

describe('PhonebookReadComponent', () => {
  let component: PhonebookReadComponent;
  let fixture: ComponentFixture<PhonebookReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhonebookReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonebookReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
