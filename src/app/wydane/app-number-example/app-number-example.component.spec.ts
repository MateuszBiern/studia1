import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppNumberExampleComponent } from './app-number-example.component';

describe('AppNumberExampleComponent', () => {
  let component: AppNumberExampleComponent;
  let fixture: ComponentFixture<AppNumberExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppNumberExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppNumberExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
