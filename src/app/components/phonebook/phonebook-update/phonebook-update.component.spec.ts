import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonebookUpdateComponent } from './phonebook-update.component';

describe('PhonebookUpdateComponent', () => {
  let component: PhonebookUpdateComponent;
  let fixture: ComponentFixture<PhonebookUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhonebookUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonebookUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
