import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonebookDeleteComponent } from './phonebook-delete.component';

describe('PhonebookDeleteComponent', () => {
  let component: PhonebookDeleteComponent;
  let fixture: ComponentFixture<PhonebookDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhonebookDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonebookDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
