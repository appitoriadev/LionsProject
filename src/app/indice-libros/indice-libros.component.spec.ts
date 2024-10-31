import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiceLibrosComponent } from './indice-libros.component';

describe('IndiceLibrosComponent', () => {
  let component: IndiceLibrosComponent;
  let fixture: ComponentFixture<IndiceLibrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndiceLibrosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndiceLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
