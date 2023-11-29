import { ComponentFixture, TestBed } from '@angular/core/testing';

import { App111Component } from './app-1-1-1.component';

describe('App111Component', () => {
  let component: App111Component;
  let fixture: ComponentFixture<App111Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App111Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(App111Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
