import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgoHomeComponent } from './algo-home.component';

describe('AlgoHomeComponent', () => {
  let component: AlgoHomeComponent;
  let fixture: ComponentFixture<AlgoHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlgoHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlgoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
