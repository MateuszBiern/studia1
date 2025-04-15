import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SynchroComponent } from './synchro.component';

describe('SynchroComponent', () => {
  let component: SynchroComponent;
  let fixture: ComponentFixture<SynchroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SynchroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SynchroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
