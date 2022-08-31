import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QurlComponent } from './qurl.component';

describe('QurlComponent', () => {
  let component: QurlComponent;
  let fixture: ComponentFixture<QurlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QurlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QurlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
