import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoldBookComponent } from './sold-book.component';

describe('SoldBookComponent', () => {
  let component: SoldBookComponent;
  let fixture: ComponentFixture<SoldBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoldBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoldBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
