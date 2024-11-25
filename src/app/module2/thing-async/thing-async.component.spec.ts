import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThingAsyncComponent } from './thing-async.component';

describe('ThingAsyncComponent', () => {
  let component: ThingAsyncComponent;
  let fixture: ComponentFixture<ThingAsyncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThingAsyncComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThingAsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
