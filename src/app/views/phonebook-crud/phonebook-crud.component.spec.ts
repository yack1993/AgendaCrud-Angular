import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonebookCrudComponent } from './phonebook-crud.component';

describe('PhonebookCrudComponent', () => {
  let component: PhonebookCrudComponent;
  let fixture: ComponentFixture<PhonebookCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhonebookCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonebookCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
