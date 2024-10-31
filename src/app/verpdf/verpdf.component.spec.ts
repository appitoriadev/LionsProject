import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerpdfComponent } from './verpdf.component';

describe('VerpdfComponent', () => {
  let component: VerpdfComponent;
  let fixture: ComponentFixture<VerpdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerpdfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerpdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
