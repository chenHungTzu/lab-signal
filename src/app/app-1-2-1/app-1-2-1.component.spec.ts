import { ComponentFixture, TestBed } from '@angular/core/testing';

import { App121Component } from './app-1-2-1.component';

describe('App121Component', () => {
  let component: App121Component;
  let fixture: ComponentFixture<App121Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App121Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(App121Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
