import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCapacidadComponent } from './test-capacidad.component';

describe('TestCapacidadComponent', () => {
  let component: TestCapacidadComponent;
  let fixture: ComponentFixture<TestCapacidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestCapacidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCapacidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
