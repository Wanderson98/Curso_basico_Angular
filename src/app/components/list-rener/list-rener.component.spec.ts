import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRenerComponent } from './list-rener.component';

describe('ListRenerComponent', () => {
  let component: ListRenerComponent;
  let fixture: ComponentFixture<ListRenerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRenerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
