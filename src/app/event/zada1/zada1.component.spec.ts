import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Zada1Component } from './zada1.component';

describe('Zada1Component', () => {
  let component: Zada1Component;
  let fixture: ComponentFixture<Zada1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Zada1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Zada1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
