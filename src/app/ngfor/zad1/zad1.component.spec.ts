import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Zad1Component } from './zad1.component';

describe('Zad1Component', () => {
  let component: Zad1Component;
  let fixture: ComponentFixture<Zad1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Zad1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Zad1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
