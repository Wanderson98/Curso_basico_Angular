import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeoWayBindingComponent } from './teo-way-binding.component';

describe('TeoWayBindingComponent', () => {
  let component: TeoWayBindingComponent;
  let fixture: ComponentFixture<TeoWayBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeoWayBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeoWayBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
