import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WydaneComponent } from './wydane.component';

describe('WydaneComponent', () => {
  let component: WydaneComponent;
  let fixture: ComponentFixture<WydaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WydaneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WydaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
