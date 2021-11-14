import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LRContainerComponent } from './lrcontainer.component';

describe('LRContainerComponent', () => {
  let component: LRContainerComponent;
  let fixture: ComponentFixture<LRContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LRContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LRContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
