import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaAsyncComponent } from './area-async.component';

describe('AreaAsyncComponent', () => {
  let component: AreaAsyncComponent;
  let fixture: ComponentFixture<AreaAsyncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AreaAsyncComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreaAsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
