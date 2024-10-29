import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SesionComponentComponent } from './sesion-component.component';

describe('SesionComponentComponent', () => {
  let component: SesionComponentComponent;
  let fixture: ComponentFixture<SesionComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SesionComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SesionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});