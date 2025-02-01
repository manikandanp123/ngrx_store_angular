import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResizeComponentComponent } from './resize-component.component';

describe('ResizeComponentComponent', () => {
  let component: ResizeComponentComponent;
  let fixture: ComponentFixture<ResizeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResizeComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResizeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
