import { ComponentFixture, TestBed } from '@angular/core/testing';

import { App12Component } from './app-1-2.component';

describe('App12Component', () => {
  let component: App12Component;
  let fixture: ComponentFixture<App12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App12Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(App12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
