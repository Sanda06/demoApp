import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThingComponent } from './thing.component';

describe('ThingComponent', () => {
  let component: ThingComponent;
  let fixture: ComponentFixture<ThingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
